import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { UserTableComponent } from './user-table/user-table.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { ManufacturersTableComponent } from './manufacturers-table/manufacturers-table.component';
import { AdvanceduiRoutingModule } from '../advancedui/advancedui-routing.module';
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModuleModule } from 'src/app/materialModule/material-module/material-module.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { CdTimerModule } from 'angular-cd-timer';
import { NgxEchartsModule } from 'ngx-echarts';
import { BarRatingModule } from 'ngx-bar-rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CountUpModule } from 'ngx-countup';
import { NgxSliderModule } from 'ngx-slider-v2';


@NgModule({
  declarations: [
    UserTableComponent,
    CustomerTableComponent,
    ManufacturersTableComponent
  ],
  providers: [],
  bootstrap: [],
  imports: [
      CommonModule,
      AdvanceduiRoutingModule,
      NgbModule,
      MaterialModuleModule,
      NgSelectModule,
      NgScrollbarModule,
      CdTimerModule,
      NgbRatingModule,
      NgxEchartsModule.forRoot({
          echarts: () => import('echarts')
      }),
      BarRatingModule,
      FormsModule,
      ReactiveFormsModule,
      SharedModule,
      CarouselModule,
      CountUpModule,
      NgxSliderModule
  ]
})
export class TablesModule { }
