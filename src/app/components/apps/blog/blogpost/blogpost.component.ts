import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Editor, Toolbar, Validators } from 'ngx-editor';
import { ToastrService } from 'ngx-toastr';
import { BlogService } from '../../../../_services/_Apps/blog.service';
import { UploadService } from '../../../../_services/_editProfile/upload.service';
import { StateService } from 'src/app/_services/state.service';
import { IBlog } from 'src/app/_interfaces/IBlog';
import { UserForm } from 'src/app/_interfaces/userform';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss']
})

export class BlogpostComponent implements OnInit {
  isLoading: boolean = false; // Indicateur de chargement de l'image



  ngOnInit(): void {
    this.editor = new Editor();
    if (this.newBlog.post !== undefined) {
      this.essatPost = this.newBlog.post;
    }    
  }

  
  files: File[]= [];
  private subscriptions = new Subscription();
  essatPost : string=""

  newBlog: IBlog = { // Doit être `newMachine` pas `IMachine`
    idBlog:0,
    title: '',
    post: '',
    process: '',
    imageBlog:'',
    likesCount: 0, // Les nombres doivent être initialisés avec des nombres, pas des chaînes
    dislikeCount:0,
    comments: [], 
    creationDate: '',
    user: {} as UserForm // Supposer que UserForm a aussi une structure définie ailleurs
  };

  resetForm() {
    // Réinitialiser l'objet newBlog
    this.newBlog = {
      idBlog: 0,
      title: '',
      post: '',
      process: '',
      imageBlog: '',
      likesCount: 0,
      dislikeCount: 0,
      comments: [], 
      creationDate: '',
      user: {} as UserForm
    };
  
    // Supprimer l'image de l'aperçu
    this.hiddenFileInput.nativeElement.value = '';
    this.files = [];
  }

  

  onContentChanged(event: any) {
    console.log('Updated content:', event);
    this.newBlog.post = event; // ici on suppose que $event est la nouvelle valeur de votre contenu
    console.log("affich newBlog.Post", this.newBlog.post)
  }
  
  
  

  @ViewChild('hiddenFileInput') hiddenFileInput: ElementRef;

  triggerFileInput() {
    // Déclenchez le clic sur le champ de saisie de fichier caché
    this.hiddenFileInput.nativeElement.click();
  }
  


  constructor(      private toastr: ToastrService,
                    private  blogservice: BlogService,
                    private uploadService: UploadService ,
                    private stateService: StateService

                  ) {}
// blogpost.component.ts
// ...

uploadFiles() {
  if (this.files.length > 0) {
    this.isLoading = true; // Commencez le chargement
    const fileData = this.files[0];
    const formData = new FormData();
    formData.append('file', fileData);
    formData.append('upload_preset', 'ml_default');
    formData.append('cloud_name', 'dcwdkktos');
    
    this.uploadService.uploadImage(formData).subscribe(
      (res) => {
        this.isLoading = false; // Le chargement de l'upload est fini
        if (res.secure_url) {
          this.newBlog.imageBlog = res.secure_url;
          console.log("imageBlog", res.secure_url);
        } else {
          this.toastr.error('Aucune URL sécurisée retournée par le serveur.');
        }
        this.hiddenFileInput.nativeElement.value = ''; // Réinitialiser le champ fichier
        this.files = []; // Réinitialiser le tableau de fichiers
      },
      (error) => {
        this.isLoading = false; // Arrêtez le chargement en cas d'erreur
        this.toastr.error('Problème lors de l\'upload de l\'image');
        console.error(error);
      }
    );
  } else {
    this.toastr.warning('Veuillez sélectionner une image à uploader');
  }
}

onImageLoad() {
  this.isLoading = false; // Arrêtez le chargement lorsque l'image est chargée
  this.toastr.success('Image chargée avec succès!');
  // Ici, vous pourriez avoir besoin d'appeler `detectChanges` si vous êtes hors du cycle Angular
  // this.cdr.detectChanges();
}

onImageError() {
  this.isLoading = false; // Arrêtez le chargement en cas d'erreur de chargement de l'image
  // Ici aussi, vous pourriez avoir besoin de détecter les changements
  // this.cdr.detectChanges();
}

// ...

  
  publishBlog() {

    this.blogservice.addBlog(this.newBlog).subscribe({
      next: (response) => {
        this.toastr.success('Blog publié avec succès!');
        this.resetForm(); // Appeler la fonction de réinitialisation ici
      },
      error: (error) => {
        this.toastr.error('Erreur lors de la publication du blog');
        console.error(error);
      }
    });
  }
  
         
 
  
      


   config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]

  };
  editordoc = '';

  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],

  ];

 

  



  onSelect(event: any): void {
    console.log(event);
    this.files.push(...event.addedFiles);
    // Après avoir ajouté les fichiers, déclenchez l'upload
    this.uploadFiles();
  }
  

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

ngOnDestroy(): void {
    this.editor.destroy();
    this.subscriptions.unsubscribe();
}


}

