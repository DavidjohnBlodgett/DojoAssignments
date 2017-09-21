import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    products: any[];
  constructor(private _productService: ProductService) { }

  ngOnInit() {
      this.products = this._productService.getAll();
      
  }

}
