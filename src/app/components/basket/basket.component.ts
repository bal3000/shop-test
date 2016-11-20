import { Component, OnInit } from '@angular/core';
import { FeaturedProduct } from '../../models/featuredproduct.model';
import { BasketService } from '../../services/basketservice.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  constructor(private basketService: BasketService) { }

  ngOnInit() {
  }

  clearBasket(event: Event): void {
    event.preventDefault();
    this.basketService.clearBasket();
  }
}
