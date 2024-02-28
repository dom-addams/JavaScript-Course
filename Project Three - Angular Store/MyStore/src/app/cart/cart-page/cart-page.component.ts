import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  // removeItem method to remove a product from the cart
  removeItem(index: number) {
    const newCart = this.cartItems.filter(item => item.id !== index)
    this.cartItems = newCart
    console.log(`Remove Item Triggered`);
    console.log(`Index`);
    console.log(index);
    this.cartService.deleteFromCart(index);
    this.cartTotal = this.cartService.cartTotal();
  }

  /////////////////////
  // From Validation //
  /////////////////////

  // validateName method to validate the full name HTML field
  /// check if field is invalid and dirty, create windows alert "fullname is required"
  /// check if field input contains numbers, create windows alert "fullname cannot contain numbers"
  /// check length of field input, create windows alert "fullname must be at least 3 characters"

  validateName() {
    if (this.fullname == '') {
      window.alert('Fullname is required');
    } else if (/\d/.test(this.fullname)) {
      window.alert('Fullname cannot contain numbers');
    } else if (this.fullname.length < 1 || this.fullname.length > 16) {
      window.alert('Fullname must be at least 3 characters and no more than 16 characters');
    } else {
      console.log('Fullname is valid');
    }
  }
  
  // validateAddress method to validate the address HTML field
  /// check if field is invalid and dirty, create windows alert "address is required"
  /// check length of field input, create windows alert "address must be at least 7 characters"
  
  validateAddress() {
    if (this.address == '') {
      window.alert('Address is required');
    } else if (this.address.length < 1) {
      window.alert('Address must be at least 7 characters');
    } else {
      console.log('Address is valid');
    }
  }

  // validateCreditCard method to validate the credit card HTML field
  /// check if field is invalid and dirty, create windows alert "credit card is required"
  /// check if field input contains letters, create windows alert "credit card cannot contain letters"
  /// check length of field input, create windows alert "credit card must be at least 16 characters"

  validateCreditCard() {
    if (this.creditcard == '') {
      window.alert('Credit Card is required');
    } else if (/\D/.test(this.creditcard)) {
      window.alert('Credit Card cannot contain letters');
    } else if (this.creditcard.length < 1 || this.creditcard.length > 16) {
      window.alert('Credit Card must be at least 16 characters');
    } else {
      console.log('Credit Card is valid');
    }
  }
}
