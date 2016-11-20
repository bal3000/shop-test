import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { IProduct } from '../../models/iproduct.interface';
import { ProductService } from '../../services/productservice.service';
import { BasketService } from '../../services/basketservice.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct;
  constructor(private productService: ProductService, private basketService: BasketService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.productService.getProduct(+params["id"]))
      .subscribe((p) => this.product = p);
  }

  addToBasket(event: Event): void {
    event.preventDefault();
    this.basketService.addProduct(this.product);
  }

  goBack(): void {
    this.location.back();
  }
}
