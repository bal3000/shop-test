import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FeaturedProduct } from '../../models/featuredproduct.model';
import { ProductService } from '../../services/productservice.service';


@Component({
  selector: 'app-featuredproducts',
  templateUrl: './featuredproducts.component.html',
  styleUrls: ['./featuredproducts.component.css']
})
export class FeaturedProductsComponent implements OnInit {
  products: FeaturedProduct[];

  constructor(private productService: ProductService) {
    this.products = [];
  }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe((res: FeaturedProduct[]) => {
        this.products = res;
      }, (err: Error) => {
        console.log(err);
      });
  }

}
