import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { IBlog } from 'src/app/_interfaces/IBlog';
import { BlogService } from 'src/app/_services/_Apps/blog.service';
import { ProfileService } from 'src/app/_services/_editProfile/profile.service';
import { StateService } from 'src/app/_services/state.service';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.scss']
})
export class BlogdetailsComponent implements OnInit {
  blog: IBlog | undefined;
  blogId: number | undefined;
  creationDate: Date | undefined;
  convertedCreationDate: Date | undefined;
  firstName: string | null = null;
  lastName: string | null = null;
  pathToProfileImage  : string | null = null;
  public userProfilePictureUrl: string | null = null;

  private subscriptions = new Subscription();



  constructor(private route: ActivatedRoute, 
              private blogService: BlogService ,
               private stateService: StateService,
               private profileService: ProfileService

             ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['idBlog']; // Assurez-vous que le nom du paramètre correspond à celui défini dans votre route
      if (id) {
        this.blogId = id; // Stockez l'ID du blog
        this.getBlogDetails(id);
      }
    });
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
  }

  getBlogDetails(id: number): void {
    this.blogService.getBlogById(id).subscribe({
      next: (data) => {
        if (data.creationDate) {
          // Stockez la date convertie dans une nouvelle propriété
          this.convertedCreationDate = new Date(data.creationDate);
        }
        this.blog = data;
        console.log("Blog details:", this.blog);
      },
      error: (err) => console.error(err)
    });
  }
  safePost(post: string | undefined): string {
    // Fournit une chaîne vide si post est undefined
    return post ? post : '';
  }

  // Ajoutez cette méthode dans BlogdetailsComponent

// Méthode pour appeler la suppression dans le service
confirmDelete(): void {
  if (this.blogId === undefined) {
    console.error('Blog ID is undefined');
    return;
  }
  // Vous pouvez ajouter une confirmation ici si nécessaire
  if (confirm('Are you sure you want to delete this blog?')) {
    this.deleteBlog(this.blogId);
  }
}

// Utilisez cette méthode pour supprimer le blog et gérer la réponse
deleteBlog(id: number): void {
  this.blogService.deleteBlog(id).subscribe({
    next: () => {
      console.log('Blog deleted successfully');
      // Vous pouvez ici rediriger l'utilisateur ou actualiser la liste des blogs
    },
    error: (error) => {
      console.error('There was an error deleting the blog', error);
    }
  });
}

// ...

ngOnDestroy(): void {
  this.subscriptions.unsubscribe();
}

}
