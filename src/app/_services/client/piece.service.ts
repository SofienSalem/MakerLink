import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPiece } from 'src/app/_interfaces/IPiece';

@Injectable({
  providedIn: 'root'
})
export class PieceService {

  private URL = 'http://localhost:8081/piece';

  constructor(private http: HttpClient) { }

  getTotalPieceCount(): Observable<number> {
    return this.http.get<number>(`${this.URL}/count`);
  }

  getAllPiecesWithDelivery(): Observable<IPiece[]> {
    return this.http.get<IPiece[]>(`${this.URL}/getAllPieceWithDelivery`);
  }


  getPiecesWithoutDelivery(): Observable<number> {
    return this.http.get<number>(`${this.URL}/countPiecesWithoutDelivery`);
  } 


  downloadPieceZip(idPiece: number): Observable<HttpResponse<Blob>> {
    return this.http.get(`${this.URL}/downloadPieceZip/${idPiece}`, {
      responseType: 'blob',
      observe: 'response'
    });
  }


  deletePiece(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/deletePiece/${id}`, { responseType: 'text' });
  }
  
  countEstimatedPiecesByUserMaker(): Observable<number> {
    return this.http.get<number>(`${this.URL}/countPiecesWithDeliveryAndChosenEstimate`);
  }














}
