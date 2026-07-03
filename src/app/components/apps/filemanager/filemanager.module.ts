import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilemanagerRoutingModule } from './filemanager-routing.module';
import { ContactUsComponent} from './filemanager/filemanager.component';
import { FilemanagerlistComponent } from './filemanagerlist/filemanagerlist.component';
import { FiledetailsComponent } from './filedetails/filedetails.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { GalleryModule } from '@ks89/angular-modal-gallery';
import'hammerjs';
import 'mousetrap';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ArchiveComponent } from './fileattachments/fileattachments.component';

@NgModule({
  declarations: [
    ContactUsComponent,
    FilemanagerlistComponent,
    FiledetailsComponent,
    ArchiveComponent
  ],
  imports: [
    CommonModule,
    FilemanagerRoutingModule,
    SharedModule,
    GalleryModule,

    NgCircleProgressModule.forRoot(),
CarouselModule,
NgbDropdownModule,
FormsModule,
    NgSelectModule,

  ]
})
export class FilemanagerModule { }
