import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct.interface';
import { IBasketService } from './ibasketservice';

@Injectable()
export class BasketService implements IBasketService {
  products: IProduct[] = [];

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

  addProduct(product: IProduct): void {
    if (this.products == null) {
      this.products = [];
    }
    let existing = this.products.find((p) => p.id === product.id);
    if (typeof (existing) === "undefined") {
      product.quantity = 1;
      this.products.push(product);
    }
    else {
      existing.quantity += 1;
    }
  }

  clearBasket(): void {
    this.products = [];
  }
}
