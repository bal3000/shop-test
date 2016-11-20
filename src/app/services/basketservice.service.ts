import { Injectable } from '@angular/core';
import { FeaturedProduct } from '../models/featuredproduct.model';
import { IBasketService } from './ibasketservice';

@Injectable()
export class BasketService implements IBasketService {
  products: FeaturedProduct[];
  constructor() {
    this.products = [];
  }

  get totalPrice(): number {
    let total: number = 0.00;
    this.products.forEach((p) => total += p.price);
    return total;
  }

  addProduct(product: FeaturedProduct): void {
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
}
