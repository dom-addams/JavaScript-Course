import Product from '../models/productClass';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

// CartService class for the cart service methods
export class CartService {
  cart: Product[];
  order: {
    fullname: string;
    address: string;
    total: string;
  };

  constructor() {
    this.cart = [];
  }

  // getCart method to get the cart
  getCart() {
    console.log(`getCart`);
    console.log(this.cart);
    return this.cart;
  }

  // addToCart method to add a product to the cart
  addToCart(product: Product) {
    let indexHolder = this.cart.findIndex((item) => item.id === product.id);
    if (indexHolder >= 0) {
      console.log(`ID's DO match`);
      let cartQuant = +this.cart[indexHolder].quantity;
      let productQuant = +product.quantity;
      let orderQuant = +cartQuant + +productQuant;
      product.quantity = +orderQuant;
      this.cart[indexHolder] = product;
    } else if (indexHolder === -1) {
      console.log(`ID's DON'T match`);
      this.cart.push(JSON.parse(JSON.stringify(product)));
      console.log(`New Cart`);
      console.log(this.cart);
    }
    console.log(`Cart`);
    console.log(this.cart);
  }

  // deleteFromCart method to delete a product from the cart
  deleteFromCart(id: number) {
    const newCart = this.cart.filter((item) => item.id !== id);
    this.cart = newCart;
    console.log(`deleteFromCart`);
    console.log(this.cart);
    window.alert(`Item Removed From Cart`);
  }

  // updateQuantity method to update the quantity of a product in the cart
  updateQuantity(quantity: number, index: number) {
    this.cart[index].quantity = quantity;
    console.log(`updateQuantity`);
    console.log(this.cart);
    window.alert(
      `Updated Cart: ${this.cart[index].name} x ${this.cart[index].quantity}`
    );
  }

  // cartTotal method to calculate the cart total
  cartTotal(): string {
    let total: number = 0;
    this.cart.map((item) => {
      total += item.price * (item.quantity || 1);
      console.log(`total`);
      console.log(total);
    });
    console.log(`Completed total`);
    console.log(total.toFixed(2));
    return total.toFixed(2);
  }

  // clearCart method to clear the cart
  clearCart() {
    this.cart = [];
  }

  // populateOrder method to populate the order
  populateOrder(fullname: string, address: string) {
    this.order = {
      fullname,
      address,
      total: this.cartTotal(),
    };
  }

  // clearOrder method to clear the order
  clearOrder() {
    this.order = {
      fullname: '',
      address: '',
      total: '',
    };
  }
}
