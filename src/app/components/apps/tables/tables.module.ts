import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { DefaulttableComponent } from './defaulttable/defaulttable.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { MaterialModuleModule } from 'src/app/materialModule/material-module/material-module.module';

import { BasicDataTableComponent } from './data-table/basic-data-table/basic-data-table.component';

import { FilterSortPaginationComponent } from './data-table/filter-sort-pagination/filter-sort-pagination.component';
import { ExpandableRowsComponent } from './data-table/expandable-rows/expandable-rows.component';
import { RetiveingHttpComponent } from './data-table/retiveing-http/retiveing-http.component';
import { TableSelectComponent } from './data-table/table-select/table-select.component';
import { DatatableComponent } from './data-table/data-table.component';

import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DefaulttableComponent,
    BasicDataTableComponent,
  ExpandableRowsComponent,
  FilterSortPaginationComponent,
  RetiveingHttpComponent,
  TableSelectComponent,
  DatatableComponent
  ],

  imports: [
  CommonModule,
    TablesRoutingModule,
    SharedModule,
    DataTablesModule,
    MaterialModuleModule,
HttpClientModule,
NgxPaginationModule,
FormsModule,
ReactiveFormsModule,
NgbModule,
  ],

})

export class TablesModule { }
