import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvanceduiRoutingModule } from './advancedui-routing.module';
import { AccordionComponent } from './accordion/accordion.component';
import { TabsComponent } from './tabs/tabs.component';
import { ChartsComponent } from './charts/charts.component';
import { SweetAlertsComponent } from './sweet-alerts/sweet-alerts.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { ContentScrollBarComponent } from './content-scroll-bar/content-scroll-bar.component';
import { ModalComponent } from './modal/modal.component';
import { ProgressComponent } from './progress/progress.component';
import { CarouselsComponent } from './carousels/carousels.component';
import { LoadersComponent } from './loaders/loaders.component';
import { CountersComponent } from './counters/counters.component';
import { RatingsComponent } from './ratings/ratings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TooltipComponent } from './tooltipandpopover/tooltip.component';
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModuleModule } from 'src/app/materialModule/material-module/material-module.module';
import { BarRatingModule } from "ngx-bar-rating";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgSelectModule } from '@ng-select/ng-select';
import { CdTimerModule } from 'angular-cd-timer';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElementCardHeaderComponent } from 'src/app/shared/layout-components/element-card-header/element-card-header.component';
import { CountUpModule } from "ngx-countup";
import { NgxSliderModule } from 'ngx-slider-v2';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
    declarations: [
        AccordionComponent,
        TabsComponent,
        ChartsComponent,
        SweetAlertsComponent,
        RangeSliderComponent,
        ContentScrollBarComponent,
        ModalComponent,
        ProgressComponent,
        CarouselsComponent,
        LoadersComponent,
        CountersComponent,
        RatingsComponent,
        ElementCardHeaderComponent,
        TooltipComponent,

    ],
    providers: [],
    bootstrap: [],
    imports: [
        CommonModule,
        AdvanceduiRoutingModule,
        NgbModule,
        MaterialModuleModule,
        NgSelectModule,
        NgScrollbarModule,
        CdTimerModule,
        NgbRatingModule,
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts')
        }),
        BarRatingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        CarouselModule,
        CountUpModule,
        NgxSliderModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        MatPaginatorModule,
    ]
})
export class AdvanceduiModule { }
