import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModuleRoutingModule } from './form-module-routing.module';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { FormElementSizesComponent } from './form-element-sizes/form-element-sizes.component';
import { FormTreeviewComponent } from './form-treeview/form-treeview.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MaterialModuleModule } from 'src/app/materialModule/material-module/material-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { SharedModule } from './../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDropzoneModule } from 'ngx-dropzone';
// import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ArchwizardModule } from 'angular-archwizard';

import { AccordionWizardComponent } from './form-wizard/accordion-wizard/accordion-wizard.component';
import { BasicContentComponent } from './form-wizard/basic-content/basic-content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxEditorModule } from 'ngx-editor';
import { ToastrModule } from 'ngx-toastr';
import { NgxColorsModule } from 'ngx-colors';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    FormElementsComponent,
    FormEditorComponent,
    FormElementSizesComponent,
    FormTreeviewComponent,
    FormWizardComponent,
    AccordionWizardComponent,
    BasicContentComponent,


  ],
  imports: [
CommonModule,
FormModuleRoutingModule,
    AngularEditorModule,
    MaterialModuleModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgSelectModule,
NgxDropzoneModule,
HttpClientModule,
NgxDaterangepickerMd.forRoot(),
NgxColorsModule,
NgbModule,
NgxEditorModule,
ToastrModule.forRoot({
  timeOut: 1000,
      positionClass: 'toast-bottom-right'
}),
MatIconModule
  ]
})
export class FormModule { }
