import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { APIService, Product } from './API.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Inventory';
  public barChartType: ChartType = 'bar';
  public chartLabels: any[] = [];
  public chartData: any[] = [];
  public colorList: any[] = [];
  public barChartLegend = true;
  public barChartPlugins = [];
  public chartOptions = {
    responsive: true,
    autoSkip: false
  }

  public products: Array<Product> = [];
  public products_select: any[] = [];
  constructor(private api: APIService) { }

  async ngOnInit() {
    this.getAllProducts();
  }

  async getAllProducts() {
    this.api.ListProducts().then((event) => {
      this.products = event.items as Product[];
      this.products_select = Array.from(new Set(this.products.map(a => a.store)))
        .map(store => {
          return this.products.find(a => a.store === store)
        })
      this.chartLabels = this.products.map(a => a.name);
      console.log(this.chartLabels);
      this.products.forEach(e => {
        this.colorList.push('#' + Math.floor(Math.random() * 16777215).toString(16));
      });
      this.chartData = [
        {
          label: 'Global Inventory',
          data: this.products.map(a => a.count),
          backgroundColor: this.colorList,
        }
      ];
    });
  }

  async getStoreProducts(store_name: string) {
    this.api.ListProducts({ store: { eq: store_name } }).then((event) => {
      this.products = event.items as Product[];
      this.chartLabels = this.products.map(a => a.name);
      this.products.forEach(e => {
        this.colorList.push('#' + Math.floor(Math.random() * 16777215).toString(16));
      });
      this.chartData = [
        {
          label: 'Inventory for: ' + store_name,
          data: this.products.map(a => a.count),
          backgroundColor: this.colorList,
        }
      ];
    });
  }

  async onStoreSelect(event: any) {
    const store_name = event.target.value;
    if (store_name == 'null') {
      this.getAllProducts();
    } else {
      this.getStoreProducts(store_name);
    }
  }
}
