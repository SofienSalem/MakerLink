import { Routes } from '@angular/router';


export const content: Routes = [
 {
    path: '',
    loadChildren: () => import('../../components/advancedui/advancedui.module').then(m => m.AdvanceduiModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/widget/widget.module').then(m => m.WidgetModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/apps/apps.module').then(m => m.AppsModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/apps/calender/calender.module').then(m => m.CalenderModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/apps/maps/maps.module').then(m => m.MapsModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/apps/filemanager/filemanager.module').then(m => m.FilemanagerModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/apps/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/apps/tables/tables.module').then(m => m.TablesModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/charts/charts.module').then(m => m.ChartsModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/form-module/form-module').then(m => m.FormModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/icons/icons.module').then(m => m.IconsModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  // {
  //   path: '',
  //   loadChildren: () => import('../../components/custompages/custompages.module').then(m => m.CustompagesModule)
  // },
  {
    path: '',
     loadChildren: () => import('../../components/elements/elements.module').then(m => m.ElementsModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/ecommerce/ecommerce.module').then(m => m.EcommerceModule)
  },




]
