import { Injectable } from '@angular/core';
import { FeaturedProduct } from '../models/featuredproduct.model';

@Injectable()
export class BasketService {
  products: FeaturedProduct[];
  constructor() { }

}
