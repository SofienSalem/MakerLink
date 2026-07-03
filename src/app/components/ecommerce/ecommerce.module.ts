import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MaterialModuleModule } from 'src/app/materialModule/material-module/material-module.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { GalleryModule } from 'ng-gallery';
import { SwiperModule } from 'swiper/angular';
@NgModule({
  declarations: [
    ShopComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    SharedModule,
    NgSelectModule,
    NgbModule,
NgbCarouselModule,
MaterialModuleModule,
FormsModule,
ReactiveFormsModule,
GalleryModule,
SwiperModule


  ]
})
export class EcommerceModule { }
