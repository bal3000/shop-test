import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { RetryOptions } from '../models/retryOptions.model';

//Ideally this service would grab its urls from a config json file, so no hard coding + it would then be renamed config.service

@Injectable()
export class ApiHelperService {
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

  public retryRequest(options: RetryOptions) {
    return (errors) => {
      return errors
        .scan((acc, value) => {
          acc += 1;
          if (acc < options.attempts) {
            return acc;
          }
          else {
            throw new Error(value);
          }
        }, 0)
        .delay(options.delay);
    };
  }

  public handleError(error: any) {
    console.error(error.message);
    return Observable.throw(error.message || 'Server error');
  }
}