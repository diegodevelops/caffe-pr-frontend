import { Component, EventEmitter, Input, Output } from '@angular/core';
import CartItem from '../models/CartItem';
import { blankProduct } from '../models/Product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input() cartItem: CartItem
  @Output() amountChanged = new EventEmitter()
  @Output() removed = new EventEmitter()

  constructor() {
    this.cartItem = { product: blankProduct, quantity: 0, dateAdded: 0 }
  }
}
