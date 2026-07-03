import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTableComponent } from './user-table/user-table.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { ManufacturersTableComponent } from './manufacturers-table/manufacturers-table.component';
import { DefaulttableComponent } from '../apps/tables/defaulttable/defaulttable.component';

const routes: Routes = [
  { path: 'table/users', component: UserTableComponent, title: 'User Table' },
  { path: 'table/customer', component: CustomerTableComponent, title: 'Customer Table' },
  { path: 'table/manufacturers', component: ManufacturersTableComponent, title: 'Manufacturers Table' },
  { path: "tables/defaulttable",title:"Slica-DefaultTable",component:DefaulttableComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
