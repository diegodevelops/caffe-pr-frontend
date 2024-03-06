import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Product, { blankProduct } from '../models/Product';
import { ProductDataService } from '../services/product-data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  id: number = 0
  product?: Product

  constructor(
    private route: ActivatedRoute,
    private productDataService: ProductDataService
  ) { } 

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') || '')
    this.productDataService.getProduct(this.id).subscribe(data => {
      this.product = data;
    })
  }
}
