import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsRoutingModule } from './elements-routing.module';
import { AlertsComponent } from './alerts/alerts.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ColorsComponent } from './colors/colors.component';
import { AvatarsquareComponent } from './avatarsquare/avatarsquare.component';
import { AvatarroundedComponent } from './avatarrounded/avatarrounded.component';
import { AvatarradiusComponent } from './avatarradius/avatarradius.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { CardDesignComponent } from './card-design/card-design.component';
import { ListComponent } from './list/list.component';
import { TagsComponent } from './tags/tags.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { BadgesComponent } from './badges/badges.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PanelsComponent } from './panels/panels.component';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
import { MediaObjectComponent } from './media-object/media-object.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MaterialModuleModule } from './../../materialModule/material-module/material-module.module';
import { SharedModule } from "../../shared/shared.module";
import { ElementCardHeaderComponent } from './tags/element-card-header/element-card-header.component';





@NgModule({
    declarations: [
        AlertsComponent,
        ButtonsComponent,
        ColorsComponent,
        AvatarsquareComponent,
        AvatarroundedComponent,
        AvatarradiusComponent,
        DropdownsComponent,
        CardDesignComponent,
        ListComponent,
        TagsComponent,
        PaginationComponent,
        NavigationComponent,
        TypographyComponent,
        BreadcrumbsComponent,
        BadgesComponent,
        NotificationsComponent,
        PanelsComponent,
        ThumbnailsComponent,
        MediaObjectComponent,
        ElementCardHeaderComponent
    ],
    imports: [

    CommonModule,
        ElementsRoutingModule,
        NgbModule,
        MaterialModuleModule,
        SharedModule,

    ]
})
export class ElementsModule { }
