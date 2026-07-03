import { Component, OnInit } from '@angular/core';

const DATA = [ {
  id:"1",
  image :"./assets/images/products/10.png",
  name:"Mens Jacket",
  offer_price:'$699',
  price:'$999',
  ribbon:'ribbon',
  link:"/ecommerce/productdetails",
  link1:"/ecommerce/wishlist",
  link2:"/ecommerce/shoppingcart",
  item:'New',
  star:'fa fa-star',
  star1:'fa fa-star',
  star2:'fa fa-star',
  star3:'fa fa-star-half-o',
  star4:'fa fa-star-o',

},
{
  id:"2",
  image :"./assets/images/products/1.png",
  name:"Metal Watch",
  offer_price:'$529',
  price:'$799',
  ribbon:'ribbon1',
 link:"/ecommerce/productdetails",
  link1:"/ecommerce/wishlist",
  link2:"/ecommerce/shoppingcart",
  item:'25%',
  star:'fa fa-star',
  star1:'fa fa-star',
  star2:'fa fa-star-half-o',
  star3:'fa fa-star-o',
  star4:'fa fa-star-o'
},
{
  id:"3",
  image :"./assets/images/products/9.png",
  name:"Mens Shoes",
  offer_price:'$239',
  price:'$399',
  ribbon:'',
 link:"/ecommerce/productdetails",
  link1:"/ecommerce/wishlist",
  link2:"/ecommerce/shoppingcart",
  item:'',
  star:'fa fa-star',
  star1:'fa fa-star',
  star2:'fa fa-star',
  star3:'fa fa-star',
  star4:'fa fa-star-half-o'
},
{
  id:"4",
  image :"./assets/images/products/2.png",
  name:"Leather Watch",
  offer_price:'$345',
  price:"$459",
  ribbon:'ribbon1',
  link:"/ecommerce/productdetails",
  link1:"/ecommerce/wishlist",
  link2:"/ecommerce/shoppingcart",
  item:'25%',
  star:'fa fa-star',
  star1:'fa fa-star',
  star2:'fa fa-star',
  star3:'fa fa-star-half-o',
  star4:'fa fa-star-o'
},
{
  id:"5",
  image :"./assets/images/products/4.png",
  name:"Digital Watch",
  offer_price:'$277',
  price:'$456',
  ribbon:'',
 link:"/ecommerce/productdetails",
  link1:"/ecommerce/wishlist",
  link2:"/ecommerce/shoppingcart",
  item:'',
  star:'fa fa-star',
  star1:'fa fa-star-half-o',
  star2:'fa fa-star-o',
  star3:'fa fa-star-o',
  star4:'fa fa-star-o'
},
{
  id:"6",
  image :"./assets/images/products/8.png",
  name:"Ladies shoes",
  offer_price:'$567',
  price:'$866',
  ribbon:'',
  link:"/ecommerce/productdetails",
  link1:"/ecommerce/wishlist",
  link2:"/ecommerce/shoppingcart",
  item:'',
  star:'fa fa-star',
  star1:'fa fa-star',
  star2:'fa fa-star',
  star3:'fa fa-star',
  star4:'fa fa-star-half-o'
},
{
  id:"7",
  image :"./assets/images/products/3.png",
  name:"Soft Toy",
  offer_price:'$455',
  price:'$567',
  ribbon:'',
   link:"/ecommerce/productdetails",
   link1:"/ecommerce/wishlist",
   link2:"/ecommerce/shoppingcart",
  item:'',
  star:'fa fa-star',
  star1:'fa fa-star',
  star2:'fa fa-star-half-o',
  star3:'fa fa-star-o',
  star4:'fa fa-star-o'
},
{
  id:"8",
  image :"./assets/images/products/5.png",
  name:"Girls Frock",
  offer_price:'$345',
  price:'$499',
ribbon:'',
 link:"/ecommerce/productdetails",
  link1:"/ecommerce/wishlist",
  link2:"/ecommerce/shoppingcart",
  item:"",
  star:'fa fa-star',
  star1:'fa fa-star',
  star2:'fa fa-star',
  star3:'fa fa-star-half-o',
  star4:'fa fa-star-o'
},
{
  id:"9",
  image :"./assets/images/products/6.png",
  name:"Gold Ring",
  offer_price:'$543',
  price:'$688',
ribbon:'ribbon1',
 link:"/ecommerce/productdetails",
  link1:"/ecommerce/wishlist",
  link2:"/ecommerce/shoppingcart",
  item:'30%',
  star:'fa fa-star',
  star1:'fa fa-star',
  star2:'fa fa-star',
  star3:'fa fa-star',
  star4:'fa fa-star-half-o'
}
]

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})

export class WishlistComponent implements OnInit {
  productData = DATA

  constructor() { }

  ngOnInit(): void {
  }

  click = (id:any)=>{
    var data = this.productData.filter(x =>{
      return x.id != id
    })
    this.productData = data
  }


}
