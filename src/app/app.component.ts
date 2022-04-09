import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { APIService, Product } from './API.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Inventory';
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  chartOptions = {
    responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  }

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  labels =  ['Iphone','Samsung','OnePlus','LG','VIVO'];
  chartData = [
    {
      label: 'Inventory',
      data: [21, 56, 4, 31, 45, 15, 57, 61, 9, 17, 24, 59] ,
      backgroundColor: ["red", "green", "blue"],
    }
  ];

  public products: Array<Product> = [];
  constructor(private api: APIService) { }

  // CHART CLICK EVENT.
  onChartClick(event:any) {
    console.log(event);
  }

  ngOnInit() {
    this.api.ListProducts().then((event) => {
      this.products = event.items as Product[];
    });
  }
}
