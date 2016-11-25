import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreFrontComponent } from './components/storefront/storefront.component';
import { ProductDetailComponent } from './components/productdetail/productdetail.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
const routes: Routes = [
    {
        path: 'home',
        component: StoreFrontComponent
    },
    {
        path: 'product/:id',
        component: ProductDetailComponent
    },
    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: 'contact',
        component: ContactPageComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
