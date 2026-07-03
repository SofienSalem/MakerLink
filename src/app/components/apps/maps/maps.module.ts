import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';

import { LeafletmapsComponent } from './leafletmaps/leafletmaps.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [

    LeafletmapsComponent

  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    SharedModule,
    NgbModule,
    HttpClientModule,
    LeafletModule
  ]
})
export class MapsModule { }
