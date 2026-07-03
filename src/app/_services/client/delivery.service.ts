import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDelivery } from 'src/app/_interfaces/IDelivery';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  private URL = 'http://localhost:8081/delivery';

  constructor(private http: HttpClient) { }

  countPiecesWithStartedManufacturing(): Observable<number> {
    return this.http.get<number>(`${this.URL}/countStartedManufacturing`);
  }

  
// Méthode pour télécharger le fichier
downloadFilePath(idDelivery: number): Observable<HttpResponse<Blob>> {
  return this.http.get(`${this.URL}/downloadFilePath/${idDelivery}`, {
    responseType: 'blob',
    observe: 'response'
  });
}

// Method to download technical drawing
downloadTechnicalDrawing(idDelivery: number): Observable<HttpResponse<Blob>> {
   return this.http.get(`${this.URL}/downloadTechnicalDrawing/${idDelivery}`, { responseType: 'blob', observe: 'response' });
  }

 getIdDeliveryWithIdPiece(idPiece: number): Observable<number> {
   return this.http.get<number>(`${this.URL}/getIdDeliveryWithIdPiece/${idPiece}`);
  }
  
  countTotalDeliveries(): Observable<number> {
    return this.http.get<number>(`${this.URL}/countTotalDeliveries`);
  }

  countDeliveriesWithChosenEstimate(): Observable<number> {
    return this.http.get<number>(`${this.URL}/countDeliveriesWithChosenEstimate`);
  }

  countDeliveriesWithManufacturingStarted(): Observable<number> {
    return this.http.get<number>(`${this.URL}/countDeliveriesWithManufacturingStarted`);
  }

  countDeliveriesWithChosenEstimateFalse(): Observable<number> {
    return this.http.get<number>(`${this.URL}/countDeliveriesWithChosenEstimateFalse`);
  }

  getAllDeliveries(): Observable<IDelivery[]> {
    return this.http.get<IDelivery[]>(`${this.URL}/getAllDeliveries`);
  }

  deleteDeliveryAndPiece(idDelivery: number): Observable<void> {
    return this.http.delete<void>(`${this.URL}/deleteDeliveryAndPiece/${idDelivery}`);
  }
  getCompletedAndPaidDeliveries(): Observable<IDelivery[]> {
    return this.http.get<IDelivery[]>(`${this.URL}/completedAndPaidDeliveries`);
  }

  updateShapingStatus(idDelivery: number): Observable<void> {
    return this.http.patch<void>(`${this.URL}/updateShapingStatus/${idDelivery}`, {});
  }
  
  archiveShipping(idDelivery: number): Observable<IDelivery> {
    return this.http.patch<IDelivery>(`${this.URL}/archiveShipping/${idDelivery}`, {});
  }
  

  getAllPaidDeliveries(): Observable<IDelivery[]> {
    return this.http.get<IDelivery[]>(`${this.URL}/paidDeliveries`);
  }


  markPaidAsArchived(idDelivery: number): Observable<IDelivery> {
    return this.http.patch<IDelivery>(`${this.URL}/markPaidAsArchived/${idDelivery}`, {});
  }

  
}
