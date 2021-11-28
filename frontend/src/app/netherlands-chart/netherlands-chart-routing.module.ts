import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetherlandsChartPage } from './netherlands-chart.page';

const routes: Routes = [
  {
    path: '',
    component: NetherlandsChartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetherlandsChartPageRoutingModule {}
