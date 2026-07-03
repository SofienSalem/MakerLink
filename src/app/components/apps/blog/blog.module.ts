import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxEditorModule } from 'ngx-editor';
@NgModule({
  declarations: [
    BlogComponent,
    BlogdetailsComponent,
    BlogpostComponent
  ],
  imports: [


  CommonModule,
    BlogRoutingModule,
    SharedModule,
    NgSelectModule,
    NgxDropzoneModule,
    NgbModule,
AngularEditorModule,
FormsModule,
ReactiveFormsModule,
NgxEditorModule
  ],
})
export class BlogModule { }
