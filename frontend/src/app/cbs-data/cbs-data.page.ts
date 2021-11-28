import { Component, OnInit, Input } from '@angular/core';
import { Postcode2020} from '../model/postcode2020';
import { CbsDataService } from './cbs-data.service';
import * as Highcharts from "highcharts";

@Component({
  selector: 'app-cbs-data',
  templateUrl: './cbs-data.page.html',
  styleUrls: ['./cbs-data.page.scss'],
})
export class CbsDataPage implements OnInit {

  postcode: number;
  gemeente: string;
  jaar: number;
  postcodeData: Postcode2020;
  bevolkingData: any;
  bevolkingJaarData: any;
  listOptions: any;
  selectedParameter = '';
  selectedParameterData: any;
  selectedParameterSeries = [];
  updateFlag = false;
  showData = '';
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = { 
    title: { 
      text: this.selectedParameter
    },
    series: [
      {
        name: this.selectedParameter,
        type: "line",
        data: this.selectedParameterSeries
      }
    ],
    credits: {
      enabled: false
    }
  };


  constructor(
    private cbsDataService: CbsDataService) {
      this.postcodeData = new Postcode2020;
    }

  
  ngOnInit(): void {
  }
  
  getPostcodeData() {
    this.showData = 'postcode'; 
    this.cbsDataService.getPostCodeData(this.postcode).subscribe((result) => {
      this.postcodeData = result[0];    
    });
  }

  getBevolkingData() {
    this.showData = 'bevolking'; 
    this.cbsDataService.getBevolkingData(this.gemeente, this.jaar).subscribe((result) => {
      this.bevolkingData = result[0];
    });
  }

  getBevolkingJaarData() {
    this.showData = 'bevolkingAlleJaren';   
    this.cbsDataService.getBevolkingJaarData(this.gemeente).subscribe((result) => {
      this.bevolkingJaarData = result; 
      var item = result[0];
      this.listOptions = Object.keys(item);
    });
  }

  getDataPerParameter() {
    this.selectedParameterData = [];
    this.selectedParameterSeries.forEach(element => {
      this.selectedParameterSeries.pop();
    });
    this.bevolkingJaarData.forEach(element => {
      var jaar = element['Perioden'];
      var value = element[this.selectedParameter];
      this.selectedParameterData.push({ 'jaar': jaar, 'value': value});
      if (value) {
        this.selectedParameterSeries.push([parseInt(jaar), parseInt(value)]);
      }
    });
    this.updateFlag = true;
    console.log(JSON.stringify(this.selectedParameterSeries));
  }



}
