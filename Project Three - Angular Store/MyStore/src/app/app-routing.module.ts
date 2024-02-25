import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductPageComponent } from './product/product-page/product-page.component';
import { CartPageComponent } from './cart/cart-page/cart-page.component';
import { OrderPageComponent } from './order/order-page/order-page.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'checkout', component: CartPageComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'order', component: OrderPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
