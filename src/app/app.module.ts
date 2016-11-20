import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StoreFrontComponent } from './components/storefront/storefront.component';
import { FeaturedProductsComponent } from './components/featuredproducts/featuredproducts.component';
import { ProductComponent } from './components/product/product.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BasketComponent } from './components/basket/basket.component';
import { ProductDetailComponent } from './components/productdetail/productdetail.component';
import { ShortenPipe } from './pipes/shorten.pipe';

import { BasketService } from './services/basketservice.service';
import { ProductService } from './services/productservice.service';

@NgModule({
  declarations: [
    AppComponent,
    StoreFrontComponent,
    FeaturedProductsComponent,
    ProductComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    ShortenPipe,
    BasketComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: StoreFrontComponent
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [BasketService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
