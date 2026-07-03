import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StateService } from '../state.service';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/_interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  URL='http://localhost:8081';

  constructor(private http: HttpClient , private stateService:StateService) { }

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.URL}/crud/getAllUsers`);
  }

  getAllMakers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.URL}/crud/all-makers`);
  }
  

  // Dans TableService
activateMaker(userId: number, activate: boolean, badge: string): Observable<IUser> {
  const params = new HttpParams()
    .set('activate', activate.toString())
    .set('badge', badge);

  return this.http.patch<IUser>(`${this.URL}/admin/activate-maker/${userId}`, null, { params });
}

}
