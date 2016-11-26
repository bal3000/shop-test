import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { StoreFrontComponent } from './components/storefront/storefront.component';
import { FeaturedProductsComponent } from './components/featuredproducts/featuredproducts.component';
import { ProductComponent } from './components/product/product.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BasketComponent } from './components/basket/basket.component';
import { ProductDetailComponent } from './components/productdetail/productdetail.component';

import { AboutPageComponent } from './components/about-page/about-page.component';

import { ContactPageComponent } from './components/contact-page/contact-page.component';

import { LoginComponent } from './components/login/login.component';

import { ShortenPipe } from './pipes/shorten.pipe';

import { BasketService } from './services/basketservice.service';
import { ProductService } from './services/productservice.service';

import { AppRoutingModule } from './app-routing.module';
import { LoginRoutingModule } from './login-routing.module';

import { AdminModule } from './admin/admin.module';

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
    ProductDetailComponent,
    AboutPageComponent,
    ContactPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AdminModule,
    LoginRoutingModule
  ],
  providers: [BasketService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
