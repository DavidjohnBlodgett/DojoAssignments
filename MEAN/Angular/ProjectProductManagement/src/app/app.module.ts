import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.modules';

import { ProductService } from './product.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductsNewComponent } from './products-new/products-new.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ItemComponent } from './products/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductsNewComponent,
    ProductsEditComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
