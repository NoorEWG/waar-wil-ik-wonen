import { Component } from '@angular/core';
import * as Highcharts from "highcharts";
// import nlMap from "@highcharts/map-collection/countries/nl-all.geo.json";

@Component({
  selector: 'app-netherlands-chart',
  templateUrl: './netherlands-chart.page.html',
  styleUrls: ['./netherlands-chart.page.scss'],
})
export class NetherlandsChartPage {

  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'chart'; 
  chartData = [{ code3: "ABW", z: 105 }, { code3: "AFG", z: 35530 }];
  chartOptions: Highcharts.Options = {
      chart: {
        map: "./assets/provinces.geo.json"
      },
      title: {
        text: "Highmaps basic demo"
      },
      subtitle: {
        text:
            "provincies"  
      },
      mapNavigation: {
        enabled: true,
        buttonOptions: {
          alignTo: "spacingBox"
        }
      },
      legend: {
        enabled: true
      },
      colorAxis: {
        min: 0
      },
      series: [
        {
          type: "map",
          name: "Random data",
          states: {
            hover: {
              color: "#BADA55"
            }
          },
          dataLabels: {
            enabled: true,
            format: "{point.name}"
          },
          allAreas: false,
          data: [
              ['nl-fr', 0],
              ['nl-gr', 1],
              ['nl-fl', 2],
              ['nl-ze', 3],
              ['nl-nh', 4],
              ['nl-zh', 5],
              ['nl-dr', 6],
              ['nl-ge', 7],
              ['nl-li', 8],
              ['nl-ov', 9],
              ['nl-nb', 10],
              ['nl-ut', 11]
          ] 
        }
      ]
    };  
}
