import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StorefrontComponent } from './components/storefront/storefront.component';
import { FeaturedproductsComponent } from './components/featuredproducts/featuredproducts.component';
import { ProductComponent } from './components/product/product.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ShortenPipe } from './pipes/shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StorefrontComponent,
    FeaturedproductsComponent,
    ProductComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
