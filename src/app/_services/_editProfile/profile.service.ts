import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StateService } from '../state.service';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/_interfaces/IUser';
import { IChangePasswordRequest } from 'src/app/_interfaces/IChangePasswordRequest';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  URL='http://localhost:8081';

  constructor(private http: HttpClient , private stateService:StateService) { }

  public updateUser(user: any): any {
    return this.http.patch(this.URL+ '/crud/updateUser', user);
  }

  // Dans votre service d'authentification ou un nouveau service utilisateur
getUserInfo(): Observable<IUser> {
  return this.http.get<IUser>(`${this.URL}/crud/userinfo`);
}


updateUserProfilePicture(photoUrl: string): Observable<any> {
  // Set the header 'Content-Type' to 'text/plain' if your backend expects a raw string
  const headers = new HttpHeaders().set('Content-Type', 'text/plain');
  return this.http.patch(`${this.URL}/crud/user/profile-picture`, photoUrl, { headers: headers });
}


/*postUserProfilePicture(photoUrl: string): Observable<any> {
  // Adaptez l'URL en fonction de la configuration de votre API Spring Boot
  return this.http.post(`${this.URL}/user/profile-picture`, { photoUrl });
}*/

getUserProfilePictureUrl(): Observable<string> {
  return this.http.get<string>(`${this.URL}/crud/user/profile-picture`, { responseType: 'text' as 'json' });
}

public changePassword(request:IChangePasswordRequest): Observable<any> {
  return this.http.patch(`${this.URL}/crud/change-password`, request);
}


getAllUsers(): Observable<IUser> {
  return this.http.get<IUser>(`${this.URL}/crud/getAllUsers`);
}

removeUserProfilePicture(): Observable<any> {
  // Pas besoin de body pour une requête DELETE, donc on envoie une option vide
  return this.http.delete(`${this.URL}/crud/user/profile-picture`);
}

  // Nouvelle méthode pour compter les utilisateurs ajoutés par mois et par rôle
  countUsersAddedByMonthAndRole(role: string): Observable<number[]> {
    return this.http.get<number[]>(`${this.URL}/crud/countUsersAddedByMonth/${role}`);
  }

}
