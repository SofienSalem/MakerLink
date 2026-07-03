import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog/blog.component';

import { BlogdetailsComponent } from './blog/blogdetails/blogdetails.component';
import { BlogpostComponent } from './blog/blogpost/blogpost.component';
import { DefaultcalenderComponent } from './calender/defaultcalender/defaultcalender.component';


import { ChatComponent } from './chat/chat.component';
import { CryptoCurrenciesComponent } from './crypto-currencies/crypto-currencies.component';
import { ArchiveComponent } from './filemanager/fileattachments/fileattachments.component';
import { FiledetailsComponent } from './filemanager/filedetails/filedetails.component';
import { ContactUsComponent } from './filemanager/filemanager/filemanager.component';
import { FilemanagerlistComponent } from './filemanager/filemanagerlist/filemanagerlist.component';
import { LeafletmapsComponent } from './maps/leafletmaps/leafletmaps.component';


import { SearchPageComponent } from './search-page/search-page.component';
import { DatatableComponent } from './tables/data-table/data-table.component';


import { DefaulttableComponent } from './tables/defaulttable/defaulttable.component';

import { TimelineComponent } from './timeline/timeline.component';
import { UserListComponent } from './user-list/user-list.component';
import { CustomerTableComponent } from '../tables/customer-table/customer-table.component';


const routes: Routes = [
  {
    path:"",
    children: [

      {path:"apps/chat",title:"Slica- Chat",component: ChatComponent},
      {path:"apps/cryptocurrencies",title:"Slica-Cryptocurrencies",component: CryptoCurrenciesComponent},
      {path:"apps/searchpage",title:"Slica- Searchpage",component: SearchPageComponent},
      {path:"apps/timeline",title:"Slica- Timeline",component: TimelineComponent},
      {path:"apps/userlist",title:"Slica-Userlist ",component: UserListComponent},
      {path:"apps/maps/leafletmaps",title:"Slica-leafletmaps",component:LeafletmapsComponent},
      {path:"apps/tables/dataable",title:"Slica-dataable",component:DatatableComponent},
      {path:"apps/tables/userTable",title:"Slica-defaulttable",component:DefaulttableComponent},
      {path:"apps/tables",title:"Slica-dataable",component:CustomerTableComponent},

     {path:"apps/blog/blog",title:"Slica- Blog",component:BlogComponent},
     { path: 'apps/blog/blogdetails/:idBlog', component: BlogdetailsComponent },
     {path:"apps/blog/blogpost",title:"Slica- Blogpost",component:BlogpostComponent},
      {path:"apps/filemanager/filemanager",title:"Slica- FileManager",component:ContactUsComponent},
      {path:"apps/filemanager/filemanagerlist",title:"Slica- FilemanagerList",component:FilemanagerlistComponent},
      {path:"apps/filemanager/filedetails",title:"Slica- FileDetails",component:FiledetailsComponent},
      {path:"apps/filemanager/fileattachments",title:"Slica- FileAttachments",component:ArchiveComponent},
      {path:"apps/calender/defaultcalender",title:"Slica- Defaultcalender",component:DefaultcalenderComponent}

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],


exports: [RouterModule]
})
export class AppsRoutingModule { }
