import { Component, Input } from '@angular/core';
import Product, { blankProduct } from '../models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product: Product

  constructor() {
    this.product = blankProduct;
  }
}
