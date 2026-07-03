import { Component, HostListener, OnInit } from '@angular/core';
import { Menu, NavService } from 'src/app/shared/services/nav.service';
import { SwitcherService } from 'src/app/shared/services/switcher.service';
@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {

  public menuItems!: Menu[];

  constructor(
    public SwitcherService: SwitcherService,
    public navServices: NavService,
  ) {
    this.navServices.items.subscribe((menuItems: any) => {
      this.menuItems = menuItems;
    });
  }
  ngOnInit() {
    document.querySelector(".slide-leftRTL")?.classList.add("d-none")
    document.querySelector(".slide-rightRTL")?.classList.add("d-none")
  }

  toggleSwitcherBody() {
    document.querySelectorAll(".slide-menu").forEach((ele)=>{
      if(ele.classList.contains("open")){
        // ele.classList.remove("open");
        // // Icon Change
        // ele.parentElement?.classList.remove("is-expanded")
        // let Icon :any = ele.parentElement?.querySelector(".side-menu__item")?.querySelectorAll("i")[1];
      }
    })

    this.SwitcherService.emitChange(false);

  }
  ngOnDestroy(){
    location.reload()
  }
  scrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 74;
  }
}
