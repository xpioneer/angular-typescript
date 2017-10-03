import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../utils/auth/auth-guard.service';

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
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'article', loadChildren: './article/article.module#ArticleModule' },
            { path: 'articletype', loadChildren: './articletype/articletype.module#ArticleTypeModule' },
            { path: 'banks', loadChildren: './banks/banks.module#BanksModule' },
            { path: 'creditcard', loadChildren: './creditcard/creditcard.module#CreditCardModule' },
            { path: 'tag', loadChildren: './tag/tag.module#TagModule' },
            { path: 'user', loadChildren: './user/user.module#UserModule' },
            { path: 'demos', loadChildren: './demos/demos.module#DemosModule' },
            { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRouting { }
