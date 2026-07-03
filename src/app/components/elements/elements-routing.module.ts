import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './alerts/alerts.component';
import { AvatarradiusComponent } from './avatarradius/avatarradius.component';
import { AvatarroundedComponent } from './avatarrounded/avatarrounded.component';
import { AvatarsquareComponent } from './avatarsquare/avatarsquare.component';
import { BadgesComponent } from './badges/badges.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardDesignComponent } from './card-design/card-design.component';
import { ColorsComponent } from './colors/colors.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { ListComponent } from './list/list.component';
import { MediaObjectComponent } from './media-object/media-object.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PanelsComponent } from './panels/panels.component';
import { TagsComponent } from './tags/tags.component';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {path:"elements/alerts",title:"Slica-Alerts",component:AlertsComponent},
      {path:"elements/avatarradius",title:"Slica-AvatarRadius",component:AvatarradiusComponent},
      {path:"elements/avatarrounded",title:"Slica-AvatarRounded",component:AvatarroundedComponent},
      {path:"elements/avatarsquare",title:"Slica-AvatarSquare",component:AvatarsquareComponent},
      {path:"elements/badges",title:"Slica-Badges",component:BadgesComponent},
      {path:"elements/breadcrumbs",title:"Slica-BreadCrumb",component:BreadcrumbsComponent},
      {path:"elements/buttons",title:"Slica-Buttons",component:ButtonsComponent},
      {path:"elements/carddesign",title:"Slica-CardDesign",component:CardDesignComponent},
      {path:"elements/colors",title:"Slica-Colors",component:ColorsComponent},
      {path:"elements/dropdowns",title:"Slica-DropDowns",component:DropdownsComponent},
      {path:"elements/list",title:"Slica-List",component:ListComponent},
      {path:"elements/mediaobject",title:"Slica-MediaObject",component:MediaObjectComponent},
      {path:"elements/navigation",title:"Slica-Navigation",component:NavigationComponent},
      {path:"elements/notifications",title:"Slica-Notifications",component:NotificationsComponent},
      {path:"elements/pagination",title:"Slica-Pagination",component:PaginationComponent},
      {path:"elements/panels",title:"Slica-Panels",component:PanelsComponent},
      {path:"elements/tags",title:"Slica-Tags",component:TagsComponent},
      {path:"elements/thumbnails",title:"Slica-ThumbNails",component:ThumbnailsComponent},
      {path:"elements/typography",title:"Slica-Typography",component:TypographyComponent},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
