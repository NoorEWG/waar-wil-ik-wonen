import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NetherlandsChartPageRoutingModule } from './netherlands-chart-routing.module';
// import { NetherlandsChartPage } from './netherlands-chart.page';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HighchartsChartModule,
    NetherlandsChartPageRoutingModule
  ],
  declarations: []
})
export class NetherlandsChartPageModule {}
