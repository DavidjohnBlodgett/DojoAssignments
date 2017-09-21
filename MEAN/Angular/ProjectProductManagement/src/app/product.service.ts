import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {
    product = new Product();
    products = [];
    count = 0;

    constructor() { }
    create(obj) {
        this.product['id'] = this.count; // still may not need due to ref passing...
        this.product['title'] = obj['title'];
        this.product['price'] = obj['price'];
        this.product['url'] = obj['url'];
        this.products.push(this.product);
        this.product = new Product();
        this.count++;
    }
    getAll() {
        return this.products;
    }
    getOne(id) {
        for(var i = 0; i < this.products.length; i++) {
            if(this.products[i].id == id) {
                return this.products[i];
            }
        }
    }
    update(obj) {
        console.log('oh god why....');
        console.log(obj.id);
        console.log('++++');
        console.log(this.products[0].id);
        for(var i = 0; i < this.products.length; i++) {
            if(this.products[i].id == obj.id) {
                // return this.products[i];
                this.products[i] = obj;
                // this.products[i].title = obj.title;
                // this.products[i].price = obj.price;
                // this.products[i].url = obj.url;
            }
        }
        // console.log(this.products);

    }
    delete(item) {
        this.remove(this.products,item);
    }
    remove(array, element) {
        const index = array.indexOf(element);

        if (index !== -1) {
            array.splice(index, 1);
        }
    }
}
