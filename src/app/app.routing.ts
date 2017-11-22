import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AuthGuard } from '../utils/auth/auth-guard.service';
import { HomeComponent } from './home';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'article', loadChildren: './article/article.module#ArticleModule' },
            { path: 'articletype', loadChildren: './articletype/articletype.module#ArticleTypeModule' },
            { path: 'tag', loadChildren: './tag/tag.module#TagModule' },
            { path: 'user', loadChildren: './user/user.module#UserModule' },
            { path: 'comment', loadChildren: './comment/comment.module#CommentModule' },
            { path: 'charts', loadChildren: './charts/chart.module#ChartModule' },
            { path: 'systemlog', loadChildren: './systemlogs/systemlog.module#SystemLogModule' },
            { path: 'demos', loadChildren: './demos/demos.module#DemosModule' },
            { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
    exports: [RouterModule],
})
export class AppRouting { }
