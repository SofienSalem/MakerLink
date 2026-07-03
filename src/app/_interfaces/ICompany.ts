import { UserForm } from "./userform";


export interface ICompany {
  idCompany?: number;
  name?: string;
  urlStore?: string;
  website?: string;
  location?: string;
  description?: string;
  imageCompany?: string;
  imageCovers?: string[];
  imageGallery?: string[];
  selectedImages?: { imageUrl: string }[]; // Modifié pour refléter que c'est un tableau d'objets
  user?: UserForm;
  processes?: string[];//just pour laffichage mais relamnet ne se trouve  pas 
}
