import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router'; // NEEDED FOR REDIRECT, with dep injection...

@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.css']
})
export class ProductsNewComponent implements OnInit {
  product = new Product();
  constructor(private _productService: ProductService, private _redirect: Router) { }

  ngOnInit() {
  }

  onSubmit() {
      this._productService.create(this.product);
      this.product= new Product();
      this._redirect.navigate(['products']);
  }

}
