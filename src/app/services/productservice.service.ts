import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FeaturedProduct } from '../models/featuredproduct.model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  getProducts(): Promise<FeaturedProduct[]> {
    return this.http.get("/json/products.json")
      .toPromise()
      .then((res) => res.json() as FeaturedProduct[])
      .catch(this.handleError);
  }
  getProduct(id: number): Promise<FeaturedProduct> {
    return this.getProducts()
      .then((ps) => ps.find((p) => p.id == id));
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
