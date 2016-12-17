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
      .map((res) => res.json() as FeaturedProduct[])
      .catch(this.handleRxError);
  }
  getProduct(id: number): Observable<FeaturedProduct> {
    return this.http.get(this.apiUrls.productByIdUrl + id)
      .map((res) => res.json() as FeaturedProduct)
      .catch(this.handleRxError);
  }

  private handleRxError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  };

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
