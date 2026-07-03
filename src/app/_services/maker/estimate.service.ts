import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEstimate } from 'src/app/_interfaces/IEstimate';

@Injectable({
  providedIn: 'root'
})
export class EstimateService {


  private URL = 'http://localhost:8081/estimate';

  constructor(private http: HttpClient) { }

 
  countTotalEstimates(): Observable<number> {
    return this.http.get<number>(`${this.URL}/countTotalEstimates`);
  }


  countEstimatesWithChoiceTrue(): Observable<number> {
    return this.http.get<number>(`${this.URL}/countEstimatesWithChoiceTrue`);
  }

  countEstimatesWithChoiceFalse(): Observable<number> {
    return this.http.get<number>(`${this.URL}/countEstimatesWithChoiceFalse`);
  }

  countEstimatesWithDeliveryManufacturingStarted(): Observable<number> {
    return this.http.get<number>(`${this.URL}/countEstimatesWithDeliveryManufacturingStartedAndChoiceTrue`);
  }

  getAllEstimates(): Observable<IEstimate[]> {
    return this.http.get<IEstimate[]>(`${this.URL}/getAllEstimates`);
  }

  deleteEstimate(idEstimate: number): Observable<void> {
    return this.http.delete<void>(`${this.URL}/delete/${idEstimate}`);
  }

  getEstimationWithIsChoiceTrue(idDelivery: number): Observable<IEstimate> {
    return this.http.get<IEstimate>(`${this.URL}/getIsChoiceEstimate/${idDelivery}`);
  }

}
