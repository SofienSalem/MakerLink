import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EmptyComponent } from './empty/empty.component';
import { FaqsComponent } from './faqs/faqs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { MailComposeComponent } from './mail-compose/mail-compose.component';
import { MailInboxComponent } from './mail-inbox/mail-inbox.component';
import { PricingTablesComponent } from './pricing-tables/pricing-tables.component';
import { ProfileComponent } from './profile/profile.component';
import { ServicesComponent } from './services/services.component';
import { SwitcherComponent } from './switcher/switcher.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  {
    path:"",
    children:[

      {path:"pages/about",title:"Slica-About",component:AboutComponent},
      {path:"pages/editprofile",title:"Slica-EditProfile",component:EditProfileComponent},
      {path:"pages/empty",title:"Slica-Empty",component:EmptyComponent},
      {path:"pages/faqs",title:"Slica-Faqs",component:FaqsComponent},
      {path:"pages/gallery",title:"Slica-Gallery",component:GalleryComponent},
      {path:"pages/invoice",title:"Slica-Invoice",component:InvoiceComponent},
      {path:"pages/mailcompose",title:"Slica-MailCompose",component:MailComposeComponent},
      {path:"pages/mailinbox",title:"Slica-MailInbox",component:MailInboxComponent},
      {path:"pages/pricingtables",title:"Slica-PricingTables",component:PricingTablesComponent},
      {path:"pages/profile",title:"Slica-Profile",component:ProfileComponent},
      {path:"pages/services",title:"Slica-Services",component:ServicesComponent},
      // {path:"pages/switcher",component:SwitcherComponent},
      {path:"pages/terms",title:"Slica-Terms",component:TermsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
