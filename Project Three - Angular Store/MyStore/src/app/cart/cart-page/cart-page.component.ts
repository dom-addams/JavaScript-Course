import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import Product from '../../models/productClass';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})

// CartPageComponent class for the cart page variables and methods
export class CartPageComponent implements OnInit {
  // Cart items array of Product objects
  cartItems: Product[];

  // Checkout form elements
  fullname: string = '';
  address: string = '';
  creditcard: string = '';

  // Cart total as CartService.cartTotal() method
  cartTotal: string = this.cartService.cartTotal();

  // CartPageComponent constructor with CartService and Router
  constructor(private cartService: CartService, private router: Router) {}

  // ngOnInit method to initialize the cartItems array
  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
    console.log(this.cartItems);
  }

  // checkoutOrder method to checkout the order
  checkoutOrder() {  
    console.log(`this.fullname`);
    console.log(this.fullname);
    console.log(this.creditcard);
    this.cartService.populateOrder(this.fullname, this.address);
    this.fullname = '';
    this.address = '';
    this.creditcard = '';
    this.cartItems = []; // Clears the cart
    this.cartService.clearCart();
    this.cartTotal = '';
    this.router.navigate(['/order']);
  }

  // updateQuantity method to update the quantity of a product in the cart
  updateQuantity(index: number, quant: string) {
    console.log(`Update Quantity Triggered`);
    console.log(`Quantity`);
    console.log(quant);
    console.log(`Index`);
    console.log(index);
    this.cartService.updateQuantity(+quant, index);
    this.cartTotal = this.cartService.cartTotal();
  }
}
