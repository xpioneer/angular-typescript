import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { HomeComponent } from './home';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'article', loadChildren: './article/article.module#ArticleModule' },
            { path: 'banks', loadChildren: './banks/banks.module#BanksModule' },
            { path: 'creditcard', loadChildren: './creditcard/creditcard.module#CreditCardModule' },
            { path: 'merchant', loadChildren: './merchant/merchant.module#MerchantModule' },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRouting { }
