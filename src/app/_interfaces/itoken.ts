import { IUser } from "./IUser"; // Assurez-vous que la casse est exactement la même que le nom de fichier réel


export interface IToken {
    access_token: string;
    user: IUser ;// Assurez-vous que l'interface IUser contient une propriété role
    refresh_token : string ;


}
