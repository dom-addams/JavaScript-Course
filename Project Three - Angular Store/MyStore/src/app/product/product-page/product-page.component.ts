import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import Product from '../../models/productClass';
import { CartService } from '../../services/cart.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})

// ProductPageComponent class to create a product page
export class ProductPageComponent implements OnInit {
  // products array to store the list of products
  products: Product[] = [];

  // product objects to store the product details
  product: Product;
  id: string;
  quantity: number = 1;

  // constructor to inject the ActivatedRoute, HttpService and CartService
  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private cart: CartService
  ) {}

  // ngOnInit method to fetch the products from the server
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id') || '';
    });
    this.httpService.getProducts().subscribe((data) => {
      this.products = data;
      this.products.filter((item, index) => {
        if (+item.id === +this.id) {
          this.product = this.products[index];
        }
      });
    });
  }

  // addToCart method to add the product to the cart
  addToCart() {
    this.product.quantity = this.quantity;
    this.cart.addToCart(this.product);
    window.alert(
      `${this.product.name} x ${this.product.quantity} have been added to your cart`
    );
  }
}
