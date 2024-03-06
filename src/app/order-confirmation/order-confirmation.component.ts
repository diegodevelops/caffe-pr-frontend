import { Component } from '@angular/core';
import { CheckoutService } from '../services/checkout.service';
import Checkout from '../models/Checkout';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.css'
})
export class OrderConfirmationComponent {
  checkout: Checkout
  prettyTotal: string = '$0.00'

  constructor(private checkoutService: CheckoutService) {
    this.checkout = this.checkoutService.getCurrentCheckout()
  }

  ngOnInit(): void {
    this.checkout = this.checkoutService.getCurrentCheckout()
    this.prettyTotal = `$${this.checkout.total.toFixed(2)}`
  }
}
