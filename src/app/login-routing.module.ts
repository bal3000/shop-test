import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
const loginRoutes: Routes = [
    { path: 'login', component: LoginComponent }
];
@NgModule({
    imports: [
        RouterModule.forChild(loginRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuardService,
        AuthService
    ]
})
export class LoginRoutingModule { }
