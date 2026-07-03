import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteShopData } from 'src/app/shared/ngrx/e-commerce/shop.action';
import { DataState } from 'src/app/shared/ngrx/e-commerce/shop.reducers';
import { ShopService } from 'src/app/shared/services/e-commerce/shop.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  delectOutData: any;

  constructor(public ShopService: ShopService, private store: Store<any>) { this.price()

    }

  ngOnInit(): void {
  }

  input1 = 1
  input2 = 1
  input3 = 1
  input4 = 1
  input5 = 1

  decrease(id:any){
    this.ShopService.decreaseQuantity(id)
  }

  plus = (id:any)=>{
    this.ShopService.addingQuantity(id)
  }

  data$ = this.store.select('data')
  totalMoney:any = 0
  totalLength = 1
  delectFunction = false
  getdelectData:any

  price(){
    this.data$.forEach((item) =>{

      this.totalLength = item.length
      if(item.length>1){
        for (let i of item){
          this.totalMoney = this.totalMoney + i.offer_price
        }
      }
      else{
        if(item[0]?.offer_price != undefined){
          this.totalMoney = item[0].offer_price
        }
      }
      if(this.delectFunction){
        this.totalMoney = 0
        this.delectFunction = false
      }
    })
  }


  delete(id:any){
    if(confirm('Are you sure you want to delete this item?')){
      this.delectFunction = true
      this.store.dispatch(deleteShopData({id}))
      let delectOutData
      this.data$.forEach((item) =>{
        delectOutData = item
      })
      this.getdelectData = this.delectOutData?.filter((x: { id: any; }) =>{
        return id != x.id
      })
      this.totalMoney = 0;
     
    }
  }

}
