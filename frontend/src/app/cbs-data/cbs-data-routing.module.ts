import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CbsDataPage } from './cbs-data.page';

const routes: Routes = [
  {
    path: '',
    component: CbsDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CbsDataPageRoutingModule {}
