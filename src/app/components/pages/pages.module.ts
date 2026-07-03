import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MailComposeComponent } from './mail-compose/mail-compose.component';
import { MailInboxComponent } from './mail-inbox/mail-inbox.component';
import { EmptyComponent } from './empty/empty.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { FaqsComponent } from './faqs/faqs.component';
import { TermsComponent } from './terms/terms.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PricingTablesComponent } from './pricing-tables/pricing-tables.component';
import { SwitcherComponent } from './switcher/switcher.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import'hammerjs';
import 'mousetrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxColorsModule } from 'ngx-colors';
import { FormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CloudinaryModule } from '@cloudinary/ng';






@NgModule({
  declarations: [
    ProfileComponent,
    EditProfileComponent,
    MailComposeComponent,
    MailInboxComponent,
    EmptyComponent,
    GalleryComponent,
    AboutComponent,
    ServicesComponent,
    FaqsComponent,
    TermsComponent,
    InvoiceComponent,
    PricingTablesComponent,
    SwitcherComponent
  ],

  imports: [
  CommonModule,
    PagesRoutingModule,
    SharedModule,
    NgbModule,
    GalleryModule,
    NgxColorsModule,
    NgSelectModule,
    FormsModule,
    NgxDropzoneModule,
    CloudinaryModule
],


})
export class PagesModule { }
