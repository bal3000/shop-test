import { Injectable } from '@angular/core';

//Ideally this service would grab its urls from a config json file, so no hard coding + it would then be renamed config.service

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