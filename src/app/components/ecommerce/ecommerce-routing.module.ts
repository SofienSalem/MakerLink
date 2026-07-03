import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckOutComponent } from './check-out/check-out.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {path:"ecommerce/checkout",title:"Slica-CheckOut", component:  CheckOutComponent},
      {path:"ecommerce/productdetails/:id",title:"Slica-ProductDetails",component:ProductDetailsComponent },
      {path:"ecommerce/shop",title:"Slica-Shop",component:ShopComponent},
      {path:"ecommerce/shoppingcart",title:"Slica-ShoppingCart",component:ShoppingCartComponent},
      {path:"ecommerce/wishlist",title:"Slica-Wishlist",component:WishlistComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class EcommerceRoutingModule { }
