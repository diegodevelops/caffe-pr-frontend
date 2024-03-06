import { Component } from '@angular/core';
import { ProductDataService } from '../services/product-data.service';
import Product from '../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  productList: Product[] = []

  constructor(private productDataService: ProductDataService) {}

  ngOnInit(): void {
    this.productDataService.getProducts().subscribe((data: Product[]) => {
      console.log(`got products => ${JSON.stringify(data)}`)
      this.productList = data;
    })
  }

}
