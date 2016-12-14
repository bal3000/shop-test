import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct.interface';
import { IBasketService } from './ibasketservice';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class BasketService implements IBasketService {
  products: IProduct[] = [];

  constructor(private http: Http) {
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
    return this.http.get("http://localhost:50496/api/basket")
      .map((res: any) => res.json() as IProduct[])
      .catch((error: any) => Observable.throw(error));
  }

  addProduct(product: IProduct): void {
    if (this.products == null) {
      this.getBasket()
        .subscribe((res: IProduct[]) => { this.products = res }, (error: any) => console.log("Error", error));
    }
    let existing = this.products.find((p) => p.id === product.id);
    if (typeof (existing) === "undefined") {
      product.quantity = 1;
      this.http.post("http://localhost:50496/api/basket", product)
        .map((res: any) => res.json() as IProduct)
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
        .subscribe((product: IProduct) => { this.products.push(product) });
    }
    else {
      existing.quantity += 1;
      this.http.put("http://localhost:50496/api/basket/" + existing.id, existing)
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
  }

  clearBasket(): void {
    this.products.forEach(product => {
      this.http.delete("http://localhost:50496/api/basket/" + product.id)
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    });

    /*this.http.delete("http://localhost:50496/api/basket/deleteall")
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));*/
    this.products = [];
  }
}
