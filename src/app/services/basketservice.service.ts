import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct.interface';
import { IBasketService } from './ibasketservice';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ApiService } from './api.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class BasketService implements IBasketService {
  products: IProduct[] = [];

  constructor(private http: Http, private apiUrls: ApiService) {
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
    return this.http.get(this.apiUrls.basketUrl)
      .retryWhen(this.retryRequest({ attempts: 3, delay: 1000 }))
      .map((res: any) => res.json() as IProduct[])
      .catch(this.handleError);
  }

  addProduct(product: IProduct): void {
    if (this.products == null) {
      this.getBasket()
        .subscribe((res: IProduct[]) => { this.products = res }, (error: any) => console.log("Error", error));
    }
    let existing = this.products.find((p) => p.id === product.id);
    if (typeof (existing) === "undefined") {
      product.quantity = 1;
      this.http.post(this.apiUrls.basketUrl, product)
        .map((res: any) => res.json() as IProduct)
        .catch(this.handleError)
        .subscribe((product: IProduct) => { this.products.push(product) });
    }
    else {
      existing.quantity += 1;
      this.http.put(this.apiUrls.basketUrl + "/" + existing.id, existing)
        .catch(this.handleError);
    }
  }

  clearBasket(): void {
    this.products.forEach(product => {
      this.http.delete(this.apiUrls.basketUrl + "/" + product.id)
        .catch(this.handleError);
    });

    /*this.http.delete("http://localhost:50496/api/basket/deleteall")
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));*/
    this.products = [];
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
  };
}
