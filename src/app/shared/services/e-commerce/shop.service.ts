import { Injectable } from '@angular/core';
import { ShopDataState } from 'src/app/components/ecommerce/shop/shop.component';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  // minusQuantity(id: any) {
  //   throw new Error('Method not implemented.');
  // }

  constructor() { }

allData =[{
  id: "1",
  name: "Mens Jacket",
  offer_price: "$699",
  photo: "./assets/images/products/10.png",
  price: "$19,799",
  Quantity: 1
}]

  gettingData(data:any){
    this.allData.push(...data)
    return data
  }

  retunData(){
    return this.allData
  }

  addingQuantity(id:any){
    this.allData[0].Quantity++
  }

  decreaseQuantity(id:any){
    if(this.allData[0].Quantity > 0){
      this.allData[0].Quantity--
    }
  }

  delectItem(id:any){
    var data = this.allData.filter(x =>{
      return x.id != id
    })
    this.allData = data
  }

  getPosta(){
    const DATA: ShopDataState[] = [ {
      id:"1",
      photo: "./assets/images/products/10.png",
      children: [
        {'img': "./assets/images/products/10.png"},
        {'img': "./assets/images/products/10.png"},
        {'img': "./assets/images/products/10.png"},

      ],
      name:"Mens Jacket",
      offer_price: '$699',
      price: '$999',
      Quantity: 1,
    }, {
      id:"2",
      photo: "./assets/images/products/1.png",
      children: [
        {'img': "./assets/images/products/1.png"},
        {'img': "./assets/images/products/1.png"},
        {'img': "./assets/images/products/1.png"},

      ],
      name:"Metal Watch",
      offer_price: '$529',
      price:'$799' ,
      Quantity: 1,
    }, {
      id:"3",
      photo: "./assets/images/products/9.png",
      children: [
        {'img':"./assets/images/products/9.png"},
        {'img':"./assets/images/products/9.png"},
        {'img':"./assets/images/products/9.png"},

      ],
      name:"Mens Shoes",
      offer_price: '$239',
      price: '$399',
      Quantity: 1,
    }, {
      id:"4",
      photo: "./assets/images/products/2.png",
      children: [
        {'img': "./assets/images/products/2.png"},
        {'img': "./assets/images/products/2.png"},
        {'img': "./assets/images/products/2.png"},
      ],
      name:"Leather Watch",
      offer_price:'$345',
      price:"$459",
      Quantity: 1,
    }, {
      id:"5",
      photo: "./assets/images/products/4.png",
      children: [
        {'img': "./assets/images/products/4.png"},
        {'img': "./assets/images/products/4.png"},
        {'img': "./assets/images/products/4.png"},
      ],
      name:"Digital Watch",
      offer_price: '$277',
      price: '$456',
      Quantity: 1,
    }, {
      id:"6",
      photo: "./assets/images/products/8.png",
      children: [
        {'img': "./assets/images/products/8.png"},
        {'img': "./assets/images/products/8.png"},
        {'img': "./assets/images/products/8.png"},

      ],
      name:"Ladies shoes",
      offer_price: '$567',
      price:'$866',
      Quantity: 1,
    }, {
      id:"7",
      photo: "./assets/images/products/3.png",
      children: [
        {'img': "./assets/images/products/3.png"},
        {'img': "./assets/images/products/3.png"},
        {'img': "./assets/images/products/3.png"},

      ],
      name:"Soft Toy",
      offer_price: '$455',
      price: '$567',
      Quantity: 1,
    },
     {
      id:"8",
      photo: "./assets/images/products/5.png",
      children: [
        {'img':"./assets/images/products/5.png"},
        {'img':"./assets/images/products/5.png"},
        {'img':"./assets/images/products/5.png"},

      ],
      name:"Girls Frock",
      offer_price: '$345',
      price:'$499',
      Quantity: 1,
    }, {
      id:"9",
      photo: "./assets/images/products/6.png",
      children: [
        {'img': "./assets/images/products/6.png"},
        {'img': "./assets/images/products/6.png"},
        {'img': "./assets/images/products/6.png"},

      ],
      name:"Gold Ring",
      offer_price:'$543',
      price: '$688',
      Quantity: 1,
    }
    ];
    return DATA
  }

}
