import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMachine } from 'src/app/_interfaces/IMachine';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  URL='http://localhost:8081/machine';

  constructor(private http: HttpClient
              ) { }


    countAllMachinesTotal(): Observable<number> {
    return this.http.get<number>(`${this.URL}/countAllMachinesTotal`);
  }

  countMachinesByProcess(process: string): Observable<number> {
    return this.http.get<number>(`${this.URL}/countMachinesByProcess/${process}`);
  }

  countMachinesByTroisPrintingTotal(): Observable<number> {
    return this.http.get<number>(`${this.URL}/countMachinesByTroisPrintingTotal`);
  }

  countMachinesByCncMachiningTotal(): Observable<number> {
    return this.http.get<number>(`${this.URL}/countMachinesByCncMachiningTotal`);
  }

  countMachinesByLaserCuttingTotal(): Observable<number> {
    return this.http.get<number>(`${this.URL}/countMachinesByLaserCuttingTotal`);
  }

  countMachinesByEdMachiningTotal(): Observable<number> {
    return this.http.get<number>(`${this.URL}/countMachinesByEdMachiningTotal`);
  }

  getAllMachines(): Observable<IMachine[]> {
    return this.http.get<IMachine[]>(`${this.URL}/getAllMachine`);
  }

  deleteMachine(id: number): Observable<void> {
    return this.http.delete<void>(`${this.URL}/deleteMachine/${id}`);
  }
}
