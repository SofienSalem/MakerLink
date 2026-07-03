import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppsRoutingModule } from './apps-routing.module';


import { ChatComponent } from './chat/chat.component';
import { CryptoCurrenciesComponent } from './crypto-currencies/crypto-currencies.component';
import { UserListComponent } from './user-list/user-list.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SearchPageComponent } from './search-page/search-page.component';

import { SharedModule } from 'src/app/shared/shared.module';


import { CalenderRoutingModule } from './calender/calender-routing.module';
import { BlogRoutingModule } from './blog/blog-routing.module';
import { TablesRoutingModule } from './tables/tables-routing.module';
import { MapsRoutingModule } from './maps/maps-routing.module';
import { FilemanagerRoutingModule } from './filemanager/filemanager-routing.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModuleModule } from 'src/app/materialModule/material-module/material-module.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { AngularEditorModule } from '@kolkov/angular-editor';

import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from 'src/app/app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './crypto-currencies/table/table.component';
import { CalendarModule,DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [

    ChatComponent,
    CryptoCurrenciesComponent,
    UserListComponent,
    TimelineComponent,
    SearchPageComponent,
    TableComponent,
    


  ],

  imports: [
    CommonModule,
 AppsRoutingModule,
 CalendarModule.forRoot({
  provide: DateAdapter,
  useFactory: adapterFactory
}),
  BlogRoutingModule,
  TablesRoutingModule,
  MapsRoutingModule,
  FilemanagerRoutingModule,
  SharedModule,
  LeafletModule,
  HttpClientModule,
  MaterialModuleModule,
  NgSelectModule,
  NgxDropzoneModule,
  AngularEditorModule,
  NgScrollbarModule ,
  NgbModule,
  FormsModule,
  ReactiveFormsModule,
NgCircleProgressModule.forRoot(),
CarouselModule,


  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppsModule { }
