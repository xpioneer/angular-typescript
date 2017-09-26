import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent } from './login/login.component';
import { AuthGuard }            from '../utils/auth/auth-guard.service';
import { AuthService }          from '../utils/auth/auth.service';
// 
const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canLoad: [AuthGuard] },
            { path: 'article', loadChildren: './article/article.module#ArticleModule', canLoad: [AuthGuard] },
            { path: 'articletype', loadChildren: './articletype/articletype.module#ArticleTypeModule', canLoad: [AuthGuard] },
            { path: 'banks', loadChildren: './banks/banks.module#BanksModule', canLoad: [AuthGuard] },
            { path: 'creditcard', loadChildren: './creditcard/creditcard.module#CreditCardModule', canLoad: [AuthGuard] },
            { path: 'tag', loadChildren: './tag/tag.module#TagModule', canLoad: [AuthGuard] },
            { path: 'user', loadChildren: './user/user.module#UserModule', canLoad: [AuthGuard] },
            { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRouting { }
