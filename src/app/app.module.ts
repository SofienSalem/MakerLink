import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from "@angular/cdk/overlay";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';
import { dataReaducer } from './shared/ngrx/e-commerce/shop.reducers';
import { MaterialModuleModule } from './materialModule/material-module/material-module.module';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { NgxSliderModule } from 'ngx-slider-v2';
import { HttpClientModule } from '@angular/common/http';
import { TokenInterceptorProvider } from './_helpers/token.interceptor';


@NgModule({
  declarations:[
    AppComponent,
    
 
  ],
  imports: [
  CommonModule,
  BrowserModule,
  AppRoutingModule,
    SharedModule,
    NgbModule,
    BrowserAnimationsModule,
    OverlayModule,
    StoreModule.forRoot({data:dataReaducer}),
    ToastrModule.forRoot({

    }),
    MaterialModuleModule,
AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgxSliderModule,
    HttpClientModule 
    

  ],
  providers: [TokenInterceptorProvider],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

