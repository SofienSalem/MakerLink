import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './shared/layout-components/layout/content-layout/content-layout.component';
import { content } from './shared/routes/routes copy';


import { ErrorLayoutComponent } from './shared/layout-components/layout/error-layout/error-layout.component';
import { Content_Routes } from './shared/routes/error.routes';
import { SwitcherLayoutComponent } from './shared/layout-components/layout/switcher-layout/switcher-layout.component';
import { SwitcherOneRoute } from './shared/routes/switchers';
import { AuthGuard } from './_helpers/auth.guard';



const routes: Routes = [

  { path: '', redirectTo:'auth/login', pathMatch: 'full'},
  {
    path:'', loadChildren: ()=> import('./authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  { path: '', redirectTo: '/dashboard/sales', pathMatch: 'full'},
  {
    path: '',
    component: ContentLayoutComponent,
    children: content,
    canActivate: [AuthGuard] // Ajoutez canActivate ici
  },
  {
    path: '',
    component: SwitcherLayoutComponent,
    children: SwitcherOneRoute,
    canActivate: [AuthGuard] // Ajoutez canActivate ici
  },
  {
    path: '',
    component: ErrorLayoutComponent,
    children: Content_Routes
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }
