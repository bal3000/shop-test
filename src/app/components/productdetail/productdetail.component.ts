import { Component, OnInit, trigger, state, style, transition, animate, keyframes, AnimationTransitionEvent  } from '@angular/core';
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
      state('inactive', style({height: 0})),
      state('active', style({height: '*'})),
      transition('inactive => active', [
        style({height: 0}),
        animate('350ms ease-in', style({height: '*'}))
      ]),
      transition('active => inactive', animate('450ms ease-out'))
    ]),
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(450, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(450, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])
    ]),
    trigger('fadeIn', [
      state('in', style({opacity: 1})),
      transition('void => *', [
        style({opacity: 0}),
        animate('350ms ease-in')
      ]),
      transition('* => void', [
        animate('350ms ease-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class ProductDetailComponent implements OnInit {
  product: IProduct;
  detailState: string = 'inactive';
  showButton: boolean = true;
  constructor(private productService: ProductService,
              private basketService: BasketService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.productService.getProduct(+params['id']))
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

  animationStarted(event: AnimationTransitionEvent): any {
    console.log(event);
  }
}
