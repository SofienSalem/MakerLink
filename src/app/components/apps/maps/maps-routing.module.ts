import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeafletmapsComponent } from './leafletmaps/leafletmaps.component';

const routes: Routes = [
  {
    path:"",
    children: [

      {path:"maps/leafletmaps",title:"Slica-LeafletMaps",component: LeafletmapsComponent}


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
