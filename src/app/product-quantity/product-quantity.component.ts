import { Component, Input } from '@angular/core';
import Product, { blankProduct } from '../models/Product';
import { CartService } from '../services/cart.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrl: './product-quantity.component.css'
})
export class ProductQuantityComponent {
  @Input() product: Product
  selectedQuantity: number = 1
  quantities: number[] = [1,2,3,4,5,6,7,8,9,10];

  constructor(private cartService: CartService) {
    this.product = blankProduct;
  }

  addToCart() {
    this.cartService.update(this.product, this.selectedQuantity);
    const sOrNot = (this.selectedQuantity > 1) ? 's' : '';
    alert(`Added ${this.selectedQuantity} ${this.product.name}${sOrNot} to cart!`);
  }
}
