import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPageComponent } from './order-page/order-page.component';

@NgModule({
  declarations: [OrderPageComponent],
  imports: [CommonModule, RouterModule],
  exports: [OrderPageComponent],
})
export class OrderModule {}
