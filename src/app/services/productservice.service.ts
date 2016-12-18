import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FeaturedProduct } from '../models/featuredproduct.model';
import { Observable } from 'rxjs/Rx';

import { ApiService } from './api.service';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {

  constructor(private http: Http, private apiUrls: ApiService) { }

  getProducts(): Observable<FeaturedProduct[]> {
    return this.http.get(this.apiUrls.productsUrl)
      .retryWhen(this.retryRequest({ attempts: 3, delay: 1000 }))
      .map((res) => res.json() as FeaturedProduct[])
      .catch(this.handleError);
  }
  getProduct(id: number): Observable<FeaturedProduct> {
    return this.http.get(this.apiUrls.productByIdUrl + id)
      .retryWhen(this.retryRequest({ attempts: 3, delay: 1000 }))
      .map((res) => res.json() as FeaturedProduct)
      .catch(this.handleError);
  }

  private retryRequest(options) {
    return (errors) => {
      return errors
        .scan((acc, value) => {
          return acc + 1;
        }, 0)
        .takeWhile((acc: number) => acc < options.attempts)
        .delay(options.delay);
    };
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
