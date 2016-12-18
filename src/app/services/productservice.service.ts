import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { FeaturedProduct } from '../models/featuredproduct.model';
import { RetryOptions } from '../models/retryOptions.model';

import { ApiHelperService } from './api.service';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {

  constructor(private http: Http, private apiHelper: ApiHelperService) { }

  getProducts(): Observable<FeaturedProduct[]> {
    return this.http.get(this.apiHelper.productsUrl)
      .retryWhen(this.apiHelper.retryRequest(new RetryOptions(3, 1000)))
      .map((res) => res.json() as FeaturedProduct[])
      .catch(this.apiHelper.handleError);
  }
  getProduct(id: number): Observable<FeaturedProduct> {
    return this.http.get(this.apiHelper.productByIdUrl + id)
      .retryWhen(this.apiHelper.retryRequest(new RetryOptions(3, 1000)))
      .map((res) => res.json() as FeaturedProduct)
      .catch(this.apiHelper.handleError);
  }
}
