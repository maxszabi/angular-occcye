import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-app-product',
  templateUrl: './app-product.component.html',
  styleUrls: ['./app-product.component.css']
})
export class AppProductComponent implements OnInit {
  
products;

  constructor(private httpC: HttpClient) {
    
  }

  getShippingPrices() {
    return this.httpC.get('https://maxszabitest.herokuapp.com/greeting?name=H4ppyM1nut3s');
  }

  showConfig() {
  this.getShippingPrices()
    .subscribe((res)=> {
      this.products = res['products'];
      console.log(this.products);
    });
}

sortBy(prop: string) {
  return this.products.sort(
        (a, b) => Number(a[prop]) < Number(b[prop]) ? 1 : Number(a[prop]) === Number(b[prop]) ? 0 : -1);
}

  ngOnInit() {
    this.showConfig();
  }
}