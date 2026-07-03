import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  URL='http://localhost:8081/users';

  constructor(private http: HttpClient) 
  { }

  getCountOfNonAdminUsers(): Observable<number> {
    return this.http.get<number>(`${this.URL}/countNonAdmins`);
  }

  getCountOfMakers(): Observable<number> {
    return this.http.get<number>(`${this.URL}/countMakers`);
  }

  getCountOfClients(): Observable<number> {
    return this.http.get<number>(`${this.URL}/countClients`);
  }

}
