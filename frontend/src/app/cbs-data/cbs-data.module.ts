import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CbsDataPageRoutingModule } from './cbs-data-routing.module';
import { CbsDataPage } from './cbs-data.page';
import { CbsDataService } from './cbs-data.service';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgbModule,
    HighchartsChartModule,
    CbsDataPageRoutingModule,
    HttpClientModule
  ],
  providers: [CbsDataService],
  declarations: [CbsDataPage]
})
export class CbsDataPageModule {}
