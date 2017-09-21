import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  product: any;
  id:any;

  constructor(private _route: ActivatedRoute, private _productService: ProductService, private _redirect: Router) {
      this._route.paramMap.subscribe( params => {
              this.product = this._productService.getOne(params.get('id'));
            //   console.log(this.product);
   	      })
  }

  ngOnInit() {
  }

  onSubmit() {
      console.log('Im in this shit');
      console.log(this.product);
      this._productService.update(this.product);
      this._redirect.navigate(['/products']);
  }
}
