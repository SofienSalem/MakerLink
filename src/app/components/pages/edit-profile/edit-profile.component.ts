import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CountryService } from 'src/app/_services/_editProfile/country.service';
import { ProfileService } from '../../../_services/_editProfile/profile.service';
import { UserForm } from 'src/app/_interfaces/userform';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { StateService } from 'src/app/_services/state.service';
import { TokenService } from 'src/app/_services/token.service';
import { UploadService } from 'src/app/_services/_editProfile/upload.service';
const DATA = [ {
  id:"1",
  name:"At vero eos et accusamus et iusto odio",
 backend:"PHP",
 date:"	15/11/2022",
 team:"	15 Members"

},
{
  id:"2",
  name:"	voluptatum deleniti atque corrupti quos",
 backend:"	Angular js",
 date:"		25/11/2022",
 team:"		12 Members"

},
{
  id:"3",
  name:"		dignissimos ducimus qui blanditiis praesentium",
 backend:"java",
 date:"5/12/2022",
 team:"	20 Members"

},
{
  id:"4",
  name:"	deleniti atque corrupti quos dolores",
 backend:"	Phython",
 date:"	14/12/2022",
 team:"	10 Members"

},
{
  id:"5",
  name:"	et quas molestias excepturi sint occaecati",
 backend:"Phython",
 date:"	4/12/2022",
 team:"	17 Members"

},
]
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  productData = DATA
  countriesAndCities: any = {};
  countries: string[] = [];
  selectedCountry?: string;
  cities: string[] = [];
  firstName: string | null = null;
  lastName: string | null = null;
  userRole: string | null = null;
  email: string | null = null;
  pathToProfileImage: string | null = null;
  public userProfilePictureUrl: string | null = null;




  
  user: UserForm = {
    firstName: '',
    lastName: '',
    address: '',
    email: '',
   // password: '',
    //confirmPassword: '',
    country: '',
    city: '',
    role: '',
    photoUrl:'',
    phoneNumber:'',
    codepostal:'',
    agreeTerms: false
  };
  formSubmitted: boolean = false;
  updateSuccess: boolean = false; // Ajouté pour suivre l'état de la mise à jour
  isEditMode: boolean = false;

  private subscriptions = new Subscription();

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  showDropzone: boolean = false;

  toggleDropzone() {
    this.showDropzone = !this.showDropzone;
  }


  //changerpassword
  currentPassword: string = '';
  newPassword: string = '';
  confirmationPassword: string = '';
  passwordMismatch: boolean = false;

  //change photoUrl
  files: File[]= [];

  @ViewChild('hiddenFileInput') hiddenFileInput: ElementRef;

  triggerFileInput() {
    // Déclenchez le clic sur le champ de saisie de fichier caché
    this.hiddenFileInput.nativeElement.click();
  }





  constructor(private countryService: CountryService,
              private profileService: ProfileService,
              private toastr: ToastrService,
              private stateService: StateService,
              private tokenService: TokenService,
              private changeDetectorRef: ChangeDetectorRef,
              private UploadService : UploadService,
              


              )
           { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(data => {
      this.countriesAndCities = data;
      this.countries = Object.keys(data);
      this.subscriptions.add(
        this.stateService.getFirstName().subscribe(name => this.firstName = name)
      );
      this.subscriptions.add(
        this.stateService.getLastName().subscribe(name => this.lastName = name)
      );
      this.userRole = this.tokenService.getUserRole(); // Récupérez le rôle de l'utilisateur du localStorage
      this.subscriptions.add(
        this.stateService.getProfileImageUrl().subscribe(url => this.pathToProfileImage = url)
      );
      this.subscriptions.add(
        this.stateService.getEmail().subscribe(name => this.email = name)
      );
      
    });

    this.loadUserInfo();

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

  }

  onCountryChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCountry = selectElement.value;
    this.cities = this.selectedCountry ? this.countriesAndCities[this.selectedCountry] : [];
  }

  updateProfile() {
    this.formSubmitted = true;
    this.profileService.updateUser(this.user).subscribe({
      next: (response: any) => {
        console.log(response);
  
        if (response.firstName) {
          this.stateService.setFirstName(response.firstName);
        }
        if (response.lastName) {
          this.stateService.setLastName(response.lastName);
        }
        if (response.address) {
          this.stateService.setAddress(response.address);
        }
        if (response.country) {
          this.stateService.setCountry(response.country);
        }
        if (response.city) {
          this.stateService.setCity(response.city);
        }
        if (response.phoneNumber) {
          this.stateService.setPhoneNumber(response.phoneNumber);
        }
        if (response.codepostal) {
          this.stateService.setCodepostal(response.codepostal);
        }
        
        console.log('Before toastr call');
        this.toastr.success('Account updated successfully');
        console.log('After toastr call');
        // ...
      },
      error: (error: any) => {
        console.error('Failed to update profile', error);
        this.toastr.error('Error updating account');
  
        // ...
      }
    });
  }
  
  
  changePassword() {
    if (this.newPassword !== this.confirmationPassword) {
      this.passwordMismatch = true;
      this.toastr.error('The passwords do not match.');
      return;
    }
    this.passwordMismatch = false;
  
    const changePasswordRequest = {
      currentPassword: this.currentPassword,
      newPassword: this.newPassword,
      confirmationPassword: this.confirmationPassword
    };
  
    this.profileService.changePassword(changePasswordRequest).subscribe({
      next: (response: any) => {
        this.toastr.success('Password updated successfully');
      },
      error: (error: any) => {
        // Ici, on essaye d'afficher le message d'erreur renvoyé par le backend
        this.toastr.error('Error updating Password');
      }
    });
  }

  
  loadUserInfo() {
    this.profileService.getUserInfo().subscribe(user => {
      this.user = { ...this.user, ...user };
      // Assurez-vous de gérer les erreurs et de définir les champs nécessaires
    }, error => {
      console.error("Erreur lors de la récupération des informations de l'utilisateur", error);
      // Gestion des erreurs (par exemple, redirection vers la page de connexion)
    });
  }



  onSelect(event: any): void {
    console.log(event);
    this.files.push(...event.addedFiles);
    // Après avoir ajouté les fichiers, déclenchez l'upload
    this.uploadFiles();
  }
  onRemove (event:any){
    console.log(event);
    this.files.splice(this.files.indexOf(event),1)
  
  }
  
  uploadFiles() {
    if (this.files.length > 0) {
      const fileData = this.files[0];
      const formData = new FormData();
      formData.append('file', fileData);
      formData.append('upload_preset', 'ml_default');
      formData.append('cloud_name', 'dcwdkktos');
      
      this.UploadService.uploadImage(formData).subscribe(
        (res) => {
  
          this.stateService.setProfileImageUrl(res.secure_url); // Mettez à jour le StateService
  
  
          this.updateUserProfilePicture(res.secure_url);
  
          this.hiddenFileInput.nativeElement.value = ''; // Réinitialiser le champ fichier
          this.files = []; // Réinitialiser le tableau de fichiers
        },
        (error) => {
          this.toastr.error('Problème lors de l\'upload de l\'image');
          console.error(error);
        }
      );
    } else {
      this.toastr.warning('Veuillez sélectionner une image à uploader');
    }
  }
  
  
  updateUserProfilePicture(photoUrl: string) {
    const uniqueUrl = photoUrl + '?timestamp=' + new Date().getTime();
    
    this.profileService.updateUserProfilePicture(uniqueUrl).subscribe(
      (res) => {
        this.user.photoUrl = uniqueUrl;
        this.toastr.success('Image de profil mise à jour avec succès');
        this.changeDetectorRef.detectChanges();
        this.loadUserInfo(); // Recharger les informations de l'utilisateur
        // Récupérer l'URL mise à jour de l'image de profil et la stocker dans le StateService
        this.stateService.setProfileImageUrl(uniqueUrl); // Mettre à jour l'URL dans StateService
      
  
      },
      (error) => {
        this.toastr.error('Problème lors de la mise à jour de l\'image de profil');
        console.error(error);
      }
    );
  }
  
  handleImageError() {
    // Incorporez une logique ici pour gérer une erreur de chargement d'image
    // Par exemple, en affectant une image de substitution ou en réessayant le chargement de l'image
    // ou forcer le rechargement de l'image
    this.user.photoUrl += `?dummy=${new Date().getTime()}`;
  }


  deleteUserProfilePicture() {
    this.profileService.removeUserProfilePicture().subscribe({
      next: (res) => {
        this.toastr.success('Photo de profil supprimée avec succès');
        this.user.photoUrl = ''; // Supprimez l'URL de la photo de l'utilisateur localement
        this.stateService.setProfileImageUrl(this.user.photoUrl); // Met à jour le service d'état pour refléter la suppression
        this.changeDetectorRef.detectChanges(); // Rafraîchissez les données affichées
        this.showDropzone = false;

        // Vous pouvez aussi recharger les infos de l'utilisateur ici si nécessaire
      },
      error: (error) => {
        this.toastr.error('Problème lors de la suppression de la photo de profil');
        console.error(error);
      }
    });
  }


  click = (id:any)=>{
    var data = this.productData.filter(x =>{
      return x.id != id
    })
    this.productData = data
  }

}
