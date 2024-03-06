import { TestBed } from '@angular/core/testing';

import { ProductDataService } from './product-data.service';
import Product from '../models/Product';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('ProductDataService', () => {
  let service: ProductDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return product array', () => {
    const data = service.getProducts().subscribe((data: Product[]) => {
      expect(data[0].name).toBe('Book');
      expect(data.length).toBeGreaterThan(0);
    })
  })
});
