import { Input, Component, OnInit } from '@angular/core';
import { FeaturedProduct } from '../../models/featuredproduct.model';
import { BasketService } from '../../services/basketservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: FeaturedProduct;
  constructor(private basketService: BasketService) { }

  ngOnInit() { }

  addToBasket(event: Event): void {
    event.preventDefault();
    this.basketService.addProduct(this.product);
  }
}
