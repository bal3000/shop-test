import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FeaturedProduct } from '../models/featuredproduct.model';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  getProducts(): Observable<FeaturedProduct[]> {
    return this.http.get("http://localhost:50496/api/products")
      .map((res) => res.json() as FeaturedProduct[])
      .catch((error: any) => Observable.throw(error));
  }
  getProduct(id: number): Observable<FeaturedProduct> {
    return this.http.get("http://localhost:50496/api/products/" + id)
      .map((res) => res.json() as FeaturedProduct)
      .catch(this.handleError);
  }

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
