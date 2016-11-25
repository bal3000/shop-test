import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreFrontComponent } from './components/storefront/storefront.component';
import { ProductDetailComponent } from './components/productdetail/productdetail.component';
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
