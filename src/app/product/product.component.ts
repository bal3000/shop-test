import { Input, Component, OnInit } from '@angular/core';
import { FeaturedProduct } from './featuredproduct.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: FeaturedProduct;

  constructor() { }

  ngOnInit() {
  }

}
