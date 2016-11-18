import { Input, Output, Component, OnInit } from '@angular/core';
import { FeaturedProduct } from '../../models/featuredproduct.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: FeaturedProduct;
  @Output() on
  constructor() { }

  ngOnInit() {
  }

  addToBasket(event: Event): void {
    event.preventDefault();
    //TODO: add to basket service
    console.log(this.product);
  }
}
