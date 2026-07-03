import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartJsComponent } from './chart-js/chart-js.component';
import { EchartsComponent } from './echarts/echarts.component';
import { ApexchartsComponent } from './apexcharts/apexcharts.component';


const routes: Routes = [
  {
    path:"",
    children:[

       {path:"charts/chartjs",title:"Slica-ChartJs",component:ChartJsComponent},
       {path:"charts/echarts",title:"Slica-Echarts",component:EchartsComponent},

       {path:"charts/apexcharts",title:"Slica-ApexCharts",component:ApexchartsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ChartsRoutingModule { }
