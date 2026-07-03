import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { BlogpostComponent } from './blogpost/blogpost.component';

const routes: Routes = [
  {path:'blog', children:[
    {path: 'blog', component: BlogComponent},
    {path: 'blogdetails', component: BlogdetailsComponent},
    {path: 'blogpost', component: BlogpostComponent},
]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
