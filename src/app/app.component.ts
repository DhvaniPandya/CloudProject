import { Component } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  title = 'myapp';
  chartOptions = {
    responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  }

  labels =  ['Iphone','Samsung','OnePlus','LG','VIVO'];

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  chartData = [
    {
      label: 'Inventory',
      data: [21, 56, 4, 31, 45, 15, 57, 61, 9, 17, 24, 59] ,
      backgroundColor: ["red", "green", "blue"],
    }
  ];

  
  // CHART CLICK EVENT.
  onChartClick(event:any) {
    console.log(event);
  }

  constructor() { }
  
  ngOnInit() {
  }
}
