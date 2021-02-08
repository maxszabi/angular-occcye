import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-app-product',
  templateUrl: './app-product.component.html',
  styleUrls: ['./app-product.component.css']
})
export class AppProductComponent implements OnInit {
  
products;
hasDiscount;

 @Input()  mask: boolean;
  @Output() loadingDone = new EventEmitter<boolean>();

  constructor(private httpC: HttpClient) {
    
  }

  getShippingPrices() {
    return this.httpC.get('https://maxszabitest.herokuapp.com/greeting?name=H4ppyM1nut3s');
  }

  showConfig() {
    this.hasDiscount = false;
    console.log(this.mask);
  this.getShippingPrices()
    .subscribe((res)=> {
      this.mask = false;
      this.loadingDone.emit(this.mask);
      this.products = res['products'];
      this.hasDiscount = Array.isArray(this.products);
      if (this.hasDiscount) {
        this.hasDiscount = this.products.length > 0;
      }
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