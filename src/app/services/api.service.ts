import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  private baseUrl: string = "http://localhost:50496";

  constructor() { }

  get productsUrl(): string {
    return this.baseUrl + "/api/products";
  }

  get productByIdUrl(): string {
    return this.baseUrl + "/api/products/";
  }

  get basketUrl(): string {
    return this.baseUrl + "/api/basket";
  }
}