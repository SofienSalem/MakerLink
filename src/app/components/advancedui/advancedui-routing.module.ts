import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component';
import { CarouselsComponent } from './carousels/carousels.component';
import { ChartsComponent } from './charts/charts.component';
import { ContentScrollBarComponent } from './content-scroll-bar/content-scroll-bar.component';
import { CountersComponent } from './counters/counters.component';
import { LoadersComponent } from './loaders/loaders.component';
import { ModalComponent } from './modal/modal.component';
import { ProgressComponent } from './progress/progress.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { RatingsComponent } from './ratings/ratings.component';
import { SweetAlertsComponent } from './sweet-alerts/sweet-alerts.component';
import { TabsComponent } from './tabs/tabs.component';
import { TooltipComponent } from './tooltipandpopover/tooltip.component';

const routes: Routes = [
  {path:"advancedui/accordion",title:"Slica-Accordion",component:AccordionComponent},
  {path:"advancedui/carousels",title:"Slica-Carousels",component:CarouselsComponent},
  {path:"advancedui/charts",title:"Slica-Charts",component:ChartsComponent},
  {path:"advancedui/contentscrollbar",title:"Slica-ContentScrollbar",component:ContentScrollBarComponent},
  {path:"advancedui/counters",title:"Slica-Counters",component:CountersComponent},
  {path:"advancedui/loaders",title:"Slica-Loaders",component:LoadersComponent},
  {path:"advancedui/modal",title:"Slica-Modal",component:ModalComponent},
  {path:"advancedui/progress",title:"Slica-Progress",component:ProgressComponent},
  {path:"advancedui/rangeslider",title:"Slica-RangeSlider",component:RangeSliderComponent},
  {path:"advancedui/ratings",title:"Slica-Ratings",component:RatingsComponent},
  {path:"advancedui/sweetalerts",title:"Slica-SweetAlerts",component:SweetAlertsComponent},
  {path:"advancedui/tabs",title:"Slica-Tabs",component:TabsComponent},
  {path:"advancedui/tooltipandpopover",title:"Slica-TooltipandPopover",component:TooltipComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class AdvanceduiRoutingModule { }
