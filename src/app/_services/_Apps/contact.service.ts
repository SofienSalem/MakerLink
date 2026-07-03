import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StateService } from '../state.service';
import { IContactUs } from 'src/app/_interfaces/IContactUs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  URL='http://localhost:8081';

  constructor(private http: HttpClient , private stateService:StateService) { }

  getAllContactUs(): Observable<IContactUs[]> {
    return this.http.get<IContactUs[]>(`${this.URL}/ContactUs/getAllContactUs`);
  }

  archiveContactUs(id: number): Observable<IContactUs> {
    return this.http.patch<IContactUs>(`${this.URL}/ContactUs/archiveContactUs/${id}`, {});
  }
  
  restoreContactUs(id: number): Observable<IContactUs> {
    return this.http.patch<IContactUs>(`${this.URL}/ContactUs/restoreContactUs/${id}`, {});
  }
  
  countAllContacts(): Observable<number> {
    return this.http.get<number>(`${this.URL}/ContactUs/countAllContacts`);
  }

  countActiveContactsByMaker(): Observable<number> {
    return this.http.get<number>(`${this.URL}/ContactUs/countActiveContactsByMaker`);
  }

  countActiveContactsByVisitor(): Observable<number> {
    return this.http.get<number>(`${this.URL}/ContactUs/countActiveContactsByVisitor`);
  }

  countActiveContactsByClient(): Observable<number> {
    return this.http.get<number>(`${this.URL}/ContactUs/countActiveContactsByClient`);
  }
}
