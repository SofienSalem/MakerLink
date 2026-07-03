import { UserForm } from "./userform";



export interface IPiece {
    idPiece?: number;
    material?: string;
    troisPrinting?: string;
    process?: string;
    tolerance?: string; 
    color?: string; 
    observation?: string; 
    quantity?: number| null;
    thickness?: number| null;
    technicalDrawing?: string;
    additionalNotes?: string;
    fileFormat?: string;
    finish?:string;
    filePath?: string;
    user?: UserForm;


  }
  