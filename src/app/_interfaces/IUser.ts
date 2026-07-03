export interface IUser {
  idUser: number;
    role: string;
    // Ajoutez ici les autres propriétés de l'utilisateur que vous attendez dans la réponse
    // ...
    firstName : string;
    lastName: string;
    photoUrl?: string; // Rendre photoUrl optionnelle
    email:string;
    address:string;
    city:string;
    country:string;
    phoneNumber:string;
    codepostal:string;
    badge?:string;


  }