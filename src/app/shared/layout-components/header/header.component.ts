import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { deleteShopData } from '../../ngrx/e-commerce/shop.action';
import { AuthService } from '../../services/auth.service';
import { ShopService } from '../../services/e-commerce/shop.service';
import { LayoutService } from '../../services/layout.service';
import { Menu, NavService } from '../../services/nav.service';
import { SwitcherService } from '../../services/switcher.service';
import { AuthServices } from 'src/app/_services/auth.service';
import { TokenService } from 'src/app/_services/token.service';
import { StateService } from 'src/app/_services/state.service';
import { Subscription } from 'rxjs';
import { ProfileService } from 'src/app/_services/_editProfile/profile.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit , OnDestroy {
  public isCollapsed = true;
  isLoggedIn = false;
  firstName: string | null = null;
  lastName: string | null = null;
  userRole: string | null = null;
  private subscriptions = new Subscription();
  pathToProfileImage: string | null = null;
  public userProfilePictureUrl: string | null = null;



  ngOnDestroy() {
    // Se désabonner pour éviter les fuites de mémoire
    this.subscriptions.unsubscribe();
  }

  constructor(
    private layoutService: LayoutService,
    public navServices: NavService,
    private modalService: NgbModal,
    public SwitcherService : SwitcherService,
    public ShopService: ShopService,
    private store: Store<any>,
    private authService: AuthServices, 
    private tokenService: TokenService,
    private stateService: StateService ,
    private profileService: ProfileService
    

  ){
    this.price();
  }


  data$ = this.store.select('data')
  totalMoney:any = 0
  totalLength = 1
  delectFunction = false
  getdelectData:any

  price(){
    this.data$.forEach((item: string | any[]) =>{

      this.totalLength = item.length
      if(item.length>1){

        this.totalMoney =this.totalMoney+item[this.totalLength-1]?.offer_price
      }
      else{
        if(item[0]?.offer_price != undefined){
          this.totalMoney = item[0].offer_price
        }
      }
      if(this.delectFunction){
        this.totalMoney = 0
        this.delectFunction = false
      }
    })
  }




  ngOnInit(): void {
    this.isLoggedIn = this.tokenService.isLogged();
    this.userRole = this.tokenService.getUserRole(); // Récupérez le rôle de l'utilisateur du localStorage

    this.subscriptions.add(
      this.stateService.getFirstName().subscribe(name => this.firstName = name)
    );
    this.subscriptions.add(
      this.stateService.getLastName().subscribe(name => this.lastName = name)
    );
    this.subscriptions.add(
      this.stateService.getProfileImageUrl().subscribe(url => this.pathToProfileImage = url)
    );

      //getUserProfilePictureUrl
      this.profileService.getUserProfilePictureUrl().subscribe({
        next: (url) => {
          console.log('Profile Picture URL:', url); // Ajoutez ceci pour déboguer
          this.userProfilePictureUrl = url;
        },
        error: (err) => {
          console.error("err",err);
          this.userProfilePictureUrl = null;
        }
      });
    

    this.navServices.items.subscribe((menuItems) => {
      this.items = menuItems;
    });
    // To clear and close the search field by clicking on body
    document.querySelector('.main-content')?.addEventListener('click',()=>{
      this.clearSearch();
    })
    this.text = '';
  }


  toggleSidebar(){
    if ((this.navServices.collapseSidebar = true)) {
      document.querySelector("body")?.classList.toggle("sidenav-toggled")
    }
    console.log("from header" + " " ,this.ShopService.retunData())
  }


  

  open(content:any) {
    this.modalService.open(content, {backdrop : 'static' , windowClass : 'modalCusSty', size: 'lg' })
  }

  toggleSwitcher() {
    this.SwitcherService.emitChange(true);
    document.querySelector('body')?.classList.remove("sidenav-toggled-open")
  }

  toggleSidebarNotification() {
    this.layoutService.emitSidebarNotifyChange(true);
  }

  logout() {
    this.authService.logout().subscribe({
      next: (response) => {
        // L'opération de déconnexion a réussi côté serveur, maintenant nettoyez le côté client
        this.tokenService.signOut(); // Supprimez le token stocké localement
        this.stateService.clearUserDetails(); // Effacez toutes les données d'utilisateur dans le StateService
        // Redirigez l'utilisateur vers la page de connexion ou la page d'accueil après la déconnexion
        // Ajoutez ici le code de redirection vers la page de connexion ou la page d'accueil
      },
      error: (error) => {
        // Gérer l'erreur de déconnexion ici
        console.error('Erreur lors de la déconnexion', error);
      }
    });
  }

  // Search
  public menuItems!: Menu[];
    public items!: Menu[];
    public text!: string;
    public SearchResultEmpty:boolean = false;



  Search(searchText: any) {
    if (!searchText) return this.menuItems = [];
    // items array which stores the elements
    let items:any[] = [];
    // Converting the text to lower case by using toLowerCase() and trim() used to remove the spaces from starting and ending
    searchText = searchText.toLowerCase().trim();
    this.items.filter((menuItems:any) => {
      // checking whether menuItems having title property, if there was no title property it will return
      if (!menuItems?.title) return false;
      //  checking wheteher menuitems type is text or string and checking the titles of menuitems
      if (menuItems.type === 'link' && menuItems.title.toLowerCase().includes(searchText)) {
        // Converting the menuitems title to lowercase and checking whether title is starting with same text of searchText
        if( menuItems.title.toLowerCase().startsWith(searchText)){// If you want to get all the data with matching to letter entered remove this line(condition and leave items.push(menuItems))
          // If both are matching then the code is pushed to items array
          items.push(menuItems);
        }
      }
      //  checking whether the menuItems having children property or not if there was no children the return
      if (!menuItems.children) return false;
      menuItems.children.filter((subItems:any) => {
        if (subItems.type === 'link' && subItems.title.toLowerCase().includes(searchText)) {
          if( subItems.title.toLowerCase().startsWith(searchText)){         // If you want to get all the data with matching to letter entered remove this line(condition and leave items.push(subItems))
            items.push(subItems);
          }

        }
        if (!subItems.children) return false;
        subItems.children.filter((subSubItems:any) => {
          if (subSubItems.title.toLowerCase().includes(searchText)) {
            if( subSubItems.title.toLowerCase().startsWith(searchText)){// If you want to get all the data with matching to letter entered remove this line(condition and leave items.push(subSubItems))
              items.push(subSubItems);
            }
          }
        })
        return;
      })
      return this.menuItems = items;
    });
    // Used to show the No search result found box if the length of the items is 0
    if(!items.length){
      this.SearchResultEmpty = true;
    }
    else{
      this.SearchResultEmpty = false;
    }
    return;
  }

   //  Used to clear previous search result
   clearSearch() {
    this.text = '';
    this.menuItems = [];
    this.SearchResultEmpty = false;
    return this.text, this.menuItems
  }


}
