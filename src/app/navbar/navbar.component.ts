import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  cartCount: number = 0 

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.productCount.subscribe(count => { this.cartCount = count; });
  }
}
