import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultcalenderComponent } from './defaultcalender/defaultcalender.component';
import { FullcalenderComponent } from './fullcalender/fullcalender.component';

const routes: Routes = [
  {
    path:"",
    children: [

      {path:"calender/defaultcalender",title:"Slica-DefaultCalender",component: DefaultcalenderComponent},
      {path:"calender/fullcalender",title:"Slica-FullCalender",component: FullcalenderComponent},


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalenderRoutingModule { }
