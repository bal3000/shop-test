import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FeaturedProduct } from '../../models/featuredproduct.model';


@Component({
  selector: 'app-featuredproducts',
  templateUrl: './featuredproducts.component.html',
  styleUrls: ['./featuredproducts.component.css']
})
export class FeaturedproductsComponent implements OnInit {
  products: FeaturedProduct[];

  constructor(private http: Http) {
    this.products = [];
  }

  ngOnInit() {
    this.http.get("/json/products.json")
      .subscribe((res: Response) => {
        this.products = res.json();
      }, (err: Error) => {
        console.log(err.message);
      });
  }

}
