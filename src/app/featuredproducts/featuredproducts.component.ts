import { Component, OnInit } from '@angular/core';
import { FeaturedProduct } from '../product/featuredproduct.model';
@Component({
  selector: 'app-featuredproducts',
  templateUrl: './featuredproducts.component.html',
  styleUrls: ['./featuredproducts.component.css']
})
export class FeaturedproductsComponent implements OnInit {
  products: FeaturedProduct[];
  constructor() {
    this.products = [
      new FeaturedProduct("test 1"),
      new FeaturedProduct("test 2"),
      new FeaturedProduct("test 3"),
      new FeaturedProduct("test 4"),
      new FeaturedProduct("test 5")
    ];
  }

  ngOnInit() {
  }

}
