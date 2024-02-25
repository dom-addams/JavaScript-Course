import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CartPageComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [CartPageComponent],
})
export class CartModule {}
