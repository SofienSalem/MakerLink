import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICompany } from 'src/app/_interfaces/ICompany';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  URL = 'http://localhost:8081/company';

  constructor(private http: HttpClient) { }


  countAllCompanies(): Observable<number> {
    return this.http.get<number>(`${this.URL}/countAllCompanies`);
  }

  countCompaniesByTroisPrinting(): Observable<number> {
    return this.http.get<number>(`${this.URL}/countCompaniesByTroisPrinting`);
  }

  countCompaniesByCncMachining(): Observable<number> {
    return this.http.get<number>(`${this.URL}/countCompaniesByCncMachining`);
  }

  countCompaniesByLaserCutting(): Observable<number> {
    return this.http.get<number>(`${this.URL}/countCompaniesByLaserCutting`);
  }

  countCompaniesByEdMachining(): Observable<number> {
    return this.http.get<number>(`${this.URL}/countCompaniesByEdMachining`);
  }

  getAllCompanies(): Observable<ICompany[]> {
    return this.http.get<ICompany[]>(`${this.URL}/getAllCompany`);
  }
}
