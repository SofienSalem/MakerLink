import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatherIconsComponent } from './feather-icons/feather-icons.component';
import { FlagIconsComponent } from './flag-icons/flag-icons.component';
import { FontAwesomeComponent } from './font-awesome/font-awesome.component';
import { IonicIconsComponent } from './ionic-icons/ionic-icons.component';
import { MaterialDesignComponent } from './material-design/material-design.component';
import { Pe7Component } from './pe7/pe7.component';
import { SimpleLineIconsComponent } from './simple-line-icons/simple-line-icons.component';
import { ThemifyIconsComponent } from './themify-icons/themify-icons.component';
import { TypiconsComponent } from './typicons/typicons.component';
import { WeatherIconsComponent } from './weather-icons/weather-icons.component';


const routes: Routes = [
  {
    path:"",
    children:[
      {path:"icons/feathericons",title:"Slica-FeatherIcons",component:FeatherIconsComponent},
      {path:"icons/flagicons",title:"Slica-FlagIcons",component:FlagIconsComponent},
      {path:"icons/fontawesome",title:"Slica-FontAwesomeIcons",component:FontAwesomeComponent},
      {path:"icons/ionicicons",title:"Slica-IonicIcons",component:IonicIconsComponent},
      {path:"icons/materialdesign",title:"Slica-MaterialDesignIcons",component:MaterialDesignComponent},
      {path:"icons/pe7",title:"Slica-pe7Icons",component:Pe7Component},
      {path:"icons/simplelineicons",title:"Slica-SimpleLineIcons",component:SimpleLineIconsComponent},
      {path:"icons/themifyicons",title:"Slica-ThemifyIcons",component:ThemifyIconsComponent},
      {path:"icons/typicons",title:"Slica-TypIcons",component:TypiconsComponent},
      {path:"icons/weathericon",title:"Slica-WeatherIcons",component:WeatherIconsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule { }
