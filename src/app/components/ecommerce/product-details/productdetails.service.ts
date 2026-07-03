import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {

  constructor() {}
  private productId = new Subject<any>();
  dynamicProductId = this.productId.asObservable();
  emitProductId(value: any){
    this.productId.next(value);
  }
}
