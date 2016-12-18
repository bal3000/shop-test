import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct.interface';
import { IBasketService } from './ibasketservice';
import { RetryOptions } from '../models/retryOptions.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ApiHelperService } from './api.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class BasketService implements IBasketService {
  products: IProduct[] = [];

  constructor(private http: Http, private apiHelper: ApiHelperService) {
    this.getBasket()
      .subscribe((res: IProduct[]) => { this.products = res }, (error: Error) => console.log("Error", error));
  }

  get totalPrice(): number {
    let total: number = 0.00;
    this.products.forEach((p) => total += (p.price * p.quantity));
    return total;
  }

  get totalQuantity(): number {
    let total: number = 0;
    this.products.forEach((p) => total += p.quantity);
    return total;
  }

  getBasket(): Observable<IProduct[]> {
    return this.http.get(this.apiHelper.basketUrl)
      .retryWhen(this.apiHelper.retryRequest(new RetryOptions(3, 1000)))
      .map((res: any) => res.json() as IProduct[])
      .catch(this.apiHelper.handleError);
  }

  addProduct(product: IProduct): void {
    if (this.products == null) {
      this.getBasket()
        .subscribe((res: IProduct[]) => { this.products = res }, (error: any) => console.log("Error", error));
    }
    let existing = this.products.find((p) => p.id === product.id);
    if (typeof (existing) === "undefined") {
      product.quantity = 1;
      this.http.post(this.apiHelper.basketUrl, product)
        .map((res: any) => res.json() as IProduct)
        .catch(this.apiHelper.handleError)
        .subscribe((product: IProduct) => { this.products.push(product) });
    }
    else {
      existing.quantity += 1;
      this.http.put(this.apiHelper.basketUrl + "/" + existing.id, existing)
        .catch(this.apiHelper.handleError);
    }
  }

  clearBasket(): void {
    this.products.forEach(product => {
      this.http.delete(this.apiHelper.basketUrl + "/" + product.id)
        .catch(this.apiHelper.handleError);
    });

    /*this.http.delete("http://localhost:50496/api/basket/deleteall")
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));*/
    this.products = [];
  }
}
