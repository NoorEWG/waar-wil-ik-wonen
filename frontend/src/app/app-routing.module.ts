import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'netherlands-chart',
    loadChildren: () => import('./netherlands-chart/netherlands-chart.module').then( m => m.NetherlandsChartPageModule)
  },
  {
    path: 'cbs-data',
    loadChildren: () => import('./cbs-data/cbs-data.module').then( m => m.CbsDataPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
