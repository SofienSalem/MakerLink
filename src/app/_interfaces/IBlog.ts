import { Data } from "@angular/router";
import { UserForm } from "./userform";

export interface IBlog {
    idBlog?: number;
    title?: string;
    post?: string;
    process?: string;
    imageBlog?: string; 
    likesCount?: number| null;
    dislikeCount?: number| null;
    comments?: string[]; 
    creationDate?: Date | string;
    user?: UserForm; // Vous devrez créer une interface User similaire pour représenter l'utilisateur côté Angular



  }
  