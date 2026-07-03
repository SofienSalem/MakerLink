import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalenderRoutingModule } from './calender-routing.module';
import { DefaultcalenderComponent } from './defaultcalender/defaultcalender.component';
import { FullcalenderComponent } from './fullcalender/fullcalender.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MaterialModuleModule } from 'src/app/materialModule/material-module/material-module.module';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    DefaultcalenderComponent,
    FullcalenderComponent
  ],

  imports: [
CommonModule,
    CalenderRoutingModule,
    SharedModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleModule,
    NgbModule,
    MatDatepickerModule,
  ],

})
export class CalenderModule { }
