import { Component, OnInit, trigger, state, style, transition, animate  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { IProduct } from '../../models/iproduct.interface';
import { ProductService } from '../../services/productservice.service';
import { BasketService } from '../../services/basketservice.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css'],
  animations: [
    trigger('infoState', [
      state('inactive', style({
        opacity: 0,
        maxHeight: '0px'
      })),
      state('active', style({
        opacity: 1,
        maxHeight: '100%'
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out'))
    ])
  ]
})
export class ProductDetailComponent implements OnInit {
  product: IProduct;
  detailState: string = 'inactive';
  showButton: boolean = true;
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

  showDetails(event: Event): void {
    event.preventDefault();
    this.detailState = 'active';
    this.showButton = false;
  }

  goBack(): void {
    this.location.back();
  }
}
