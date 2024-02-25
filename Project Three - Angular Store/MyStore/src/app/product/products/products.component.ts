import { Component, OnInit } from '@angular/core';
import Product from '../../models/productClass';
import { CartService } from '../../services/cart.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})

// ProductsComponent class to create a list of products
export class ProductsComponent implements OnInit {
  // products array to store the list of products
  products: Product[] = [];

  // constructor to inject the HttpService and CartService
  constructor(
    private httpService: HttpService,
    private cartService: CartService
  ) {}

  // ngOnInit method to fetch the products from the server
  ngOnInit(): void {
    this.httpService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  // addToCart method to add the product to the cart
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert(
      `${product.name} x ${product.quantity} have been added to your cart`
    );
  }
}
