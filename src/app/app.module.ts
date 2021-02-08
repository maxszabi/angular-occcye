import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { AppProductComponent } from './app-product/app-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    ReactiveFormsModule, 
    MatProgressSpinnerModule,
    MatButtonModule,],
  declarations: [ AppComponent, AppProductComponent ],
  bootstrap:    [ AppComponent ],
  exports:      [ MatProgressSpinnerModule, MatButtonModule]
})
export class AppModule { }
