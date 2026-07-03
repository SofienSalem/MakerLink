import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetComponent } from './widget/widget.component';


const routes: Routes = [
  {
    path:'',
    children: [
      {path: 'widget/widget',title:"Slica-Widget" ,component: WidgetComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetRoutingModule { }
