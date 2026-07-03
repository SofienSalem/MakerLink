import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsRoutingModule } from './icons-routing.module';
import { FontAwesomeComponent } from './font-awesome/font-awesome.component';
import { SimpleLineIconsComponent } from './simple-line-icons/simple-line-icons.component';
import { ThemifyIconsComponent } from './themify-icons/themify-icons.component';
import { FlagIconsComponent } from './flag-icons/flag-icons.component';
import { FeatherIconsComponent } from './feather-icons/feather-icons.component';
import { IonicIconsComponent } from './ionic-icons/ionic-icons.component';
import { Pe7Component } from './pe7/pe7.component';
import { TypiconsComponent } from './typicons/typicons.component';
import { MaterialDesignComponent } from './material-design/material-design.component';
import { WeatherIconsComponent } from './weather-icons/weather-icons.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    FontAwesomeComponent,
    SimpleLineIconsComponent,
    ThemifyIconsComponent,
    FlagIconsComponent,
    FeatherIconsComponent,
    IonicIconsComponent,
    Pe7Component,
    TypiconsComponent,
    MaterialDesignComponent,
    WeatherIconsComponent
  ],
  imports: [

  CommonModule,
    IconsRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class IconsModule { }
