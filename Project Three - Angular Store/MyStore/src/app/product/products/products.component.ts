import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import Product from '../../models/productClass';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})

// ProductsComponent class to create a list of products
export class ProductsComponent implements OnInit {
  // pass Input and Output to the component
  @Input() product: Product
  @Output() addProduct: EventEmitter<Product> = new EventEmitter

  // quantity of product
  quantity: number = 1

  constructor() { }

  ngOnInit(): void {
  }

  // add product to cart
  addToCart(){
    console.log(`this.quantity`)
    console.log(this.quantity)
    this.product.quantity = this.quantity
    console.log(`this.product`)
    console.log(this.product)
    this.addProduct.emit(this.product)
    this.quantity = 1
  }
}
