import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { AdminRoutingModule } from './admin-routing.module';

import { AuthGuardService } from '../services/guards/auth-guard.service';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    providers: [AuthGuardService],
    declarations: [
        AdminComponent,
        AdminDashboardComponent,
        UserManagementComponent
    ]
})
export class AdminModule { }
