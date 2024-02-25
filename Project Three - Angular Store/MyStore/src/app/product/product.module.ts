import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { ProductPageComponent } from './product-page/product-page.component';

@NgModule({
  declarations: [ProductListComponent, ProductsComponent, ProductPageComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [ProductListComponent, ProductsComponent, ProductPageComponent],
})
export class ProductModule {}
