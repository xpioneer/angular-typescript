import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { Dashboard } from './dashboard.component';
import { AuthGuard } from '../../utils/auth/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        component: Dashboard,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRouting{};
