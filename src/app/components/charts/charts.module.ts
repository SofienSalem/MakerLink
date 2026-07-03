import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartJsComponent } from './chart-js/chart-js.component';
import { EchartsComponent } from './echarts/echarts.component';


import { SharedModule } from 'src/app/shared/shared.module';
import { NgChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { ApexchartsComponent } from './apexcharts/apexcharts.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    ChartJsComponent,
     EchartsComponent,
    ApexchartsComponent

  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    SharedModule,
    NgChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    NgApexchartsModule

  ]
})
export class ChartsModule { }
