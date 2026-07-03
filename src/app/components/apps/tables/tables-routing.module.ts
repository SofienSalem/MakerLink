import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatatableComponent } from './data-table/data-table.component';
import { DefaulttableComponent } from './defaulttable/defaulttable.component';
import { ExpandableRowsComponent } from './data-table/expandable-rows/expandable-rows.component';

const routes: Routes = [
  { path: "tables/defaulttable",title:"Slica-DefaultTable",component:DefaulttableComponent },
  { path: "tables/data-table",title:"Slica-DataTable",component:ExpandableRowsComponent  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class TablesRoutingModule { }
