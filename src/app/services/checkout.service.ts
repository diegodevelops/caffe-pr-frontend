import { Injectable } from '@angular/core';
import Checkout, { blankCheckout } from '../models/Checkout';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private currentCheckout: Checkout

  constructor() {
    this.currentCheckout = blankCheckout
  }

  getCurrentCheckout(): Checkout {
    return this.currentCheckout;
  }

  // making async in case in the future we do a HTTP request
  async create(objWithoutId: Checkout): Promise<Checkout> {
    const dateCreated = (new Date()).getTime();
    const id = dateCreated;
    this.currentCheckout = {
      id,
      fullName: objWithoutId.fullName,
      address: objWithoutId.address,
      cart: objWithoutId.cart,
      total: objWithoutId.total,
      dateCreated
    }
    return this.currentCheckout;
  }
}
