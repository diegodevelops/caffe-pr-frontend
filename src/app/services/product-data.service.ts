import { Injectable } from '@angular/core';
import Product from '../models/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  private urlPath: string = 'http://caffe-pr-backend-dev-env.eba-8sg3mprg.us-west-2.elasticbeanstalk.com/products'
  // private urlPath: string = './assets/data.json'

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlPath);
  }

  getProduct(id: number):  Observable<Product | undefined> {
    return new Observable((subscribe) => {
      this.getProducts().subscribe(data => {
        for (let i = 0; i < data.length; i++) {
          let p = data[i]
          if (p.id===id) { return subscribe.next(p); }
        }
        return subscribe.next(undefined);
      })
    })
    
  }
}
