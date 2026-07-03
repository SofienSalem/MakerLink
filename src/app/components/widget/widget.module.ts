import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetRoutingModule } from './widget-routing.module';
import { WidgetComponent } from './widget/widget.component';
import { SharedModule } from 'src/app/shared/shared.module';
import'hammerjs';
import 'mousetrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { NgChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { MaterialModuleModule } from 'src/app/materialModule/material-module/material-module.module';


@NgModule({
  declarations: [
    WidgetComponent,

  ],
  imports: [
CommonModule,
    WidgetRoutingModule,
    SharedModule,
    GalleryModule,
    NgbModule,
    NgCircleProgressModule.forRoot(),
    NgChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
   MaterialModuleModule
  ]
})
export class WidgetModule { }
