import { Injectable } from '@angular/core';
import CartItem from '../models/CartItem';
import Product from '../models/Product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private productCountSource = new BehaviorSubject(0);
  productCount = this.productCountSource.asObservable();
  private cartMap: {[productId: number]: CartItem} = {}

  constructor() { }

  emptyCart(): void {
    this.cartMap = {};
    this.productCountSource.next(0);
  }

  getCartItems(): CartItem[] {
    let items = [];
    for (const [id, item] of Object.entries(this.cartMap)) {
      items.push(item);
    }

    items.sort( (a, b) => {  return a.dateAdded - b.dateAdded })
    return items;
  }

  getPaymentTotal(): number {
    let total = 0;
    for (const [id, item] of Object.entries(this.cartMap)) {
      total = total + item.product.price*item.quantity;
    }
    return total;
  }

  remove(product: Product): void {
    delete this.cartMap[product.id]
    this.productCountSource.next(this.getProductCount());
  }

  update(product: Product, quantity: number): void {

    if (quantity===0) {
      delete this.cartMap[product.id];
      this.productCountSource.next(this.getProductCount());
      return;
    }

    const cartItem = this.cartMap[product.id];

    const dateAdded = (cartItem) 
      ? cartItem.dateAdded 
      : (new Date()).getTime();

    this.cartMap[product.id] = { product, quantity, dateAdded }
    this.productCountSource.next(this.getProductCount());
  }

  // helpers
  private getProductCount(): number {
    let count = 0;
    for (const [id, item] of Object.entries(this.cartMap)) {
      count = count + item.quantity
    }
    return count;
  }
}
