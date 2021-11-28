import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'kaart',
        loadChildren: () => import('../netherlands-chart/netherlands-chart.module').then(m => m.NetherlandsChartPageModule)
      },
      {
        path: 'cbs-data',
        loadChildren: () => import('../cbs-data/cbs-data.module').then(m => m.CbsDataPageModule)
      },
      {
        path: '',
        redirectTo: '/cbs-data/cbs-data',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/cbs-data',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
