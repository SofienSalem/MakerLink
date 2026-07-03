import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { FormElementSizesComponent } from './form-element-sizes/form-element-sizes.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { FormTreeviewComponent } from './form-treeview/form-treeview.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
const routes: Routes = [{
  path:"",
  children:[
    {path:'form/formeditor',title:"slica-FormEditor", component: FormEditorComponent},
    { path:"form/formelements",title:"slica-FormElements",component: FormElementsComponent},
    { path:"form/formelementsizes",title:"slica-FormElementsizes",component: FormElementSizesComponent},
    { path:"form/formtreeview",title:"slica-FormTreeview",component: FormTreeviewComponent},
    {path:'form/formwizards', title:"slica-FormWizards",component: FormWizardComponent},
  ]}]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormModuleRoutingModule { }
