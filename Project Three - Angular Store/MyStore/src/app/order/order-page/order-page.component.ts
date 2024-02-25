import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css'],
})

// OrderPageComponent class for the order page variables and methods
export class OrderPageComponent implements OnInit {
  // Order details from CartService.order
  orderDetails = this.cartService.order;

  // displayPage boolean for order details
  displayPage: boolean = false;

  // OrderPageComponent constructor with CartService
  constructor(private cartService: CartService) {}

  // ngOnInit method to initialize the displayPage boolean
  ngOnInit(): void {
    if (this.orderDetails !== undefined) {
      this.displayPage = true;
    }
  }

  // clearOrder method to clear the order
  clearOrder() {
    this.cartService.clearOrder();
  }
}
