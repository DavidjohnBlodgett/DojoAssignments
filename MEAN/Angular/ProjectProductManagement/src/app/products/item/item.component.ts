import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../product';
import { ProductService } from '../../product.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
    @Input() item: Product;
  constructor(private _productService: ProductService) { }

  ngOnInit() {
  }

  onDelete() {
      this._productService.delete(this.item);
  }

}
