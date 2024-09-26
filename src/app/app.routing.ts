import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AuthGuard } from '../utils/auth/auth-guard.service';
import { HomeComponent } from './home';
import { LoginComponent } from './login/login.component';

export const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module') },
      { path: 'article', loadChildren: () => import('./article/article.module') },
      { path: 'articletype', loadChildren: () => import('./articletype/articletype.module') },
      { path: 'tag', loadChildren: () => import('./tag/tag.module') },
      { path: 'user', loadChildren: () => import('./user/user.module') },
      { path: 'comment', loadChildren: () => import('./comment/comment.module') },
      { path: 'charts', loadChildren: () => import('./charts/chart.module') },
      { path: 'systemlog', loadChildren: () => import('./systemlogs/systemlog.module') },
      { path: 'doubleball', loadChildren: () => import('./doubleball/doubleball.module') },
      { path: 'demos', loadChildren: () => import('./demos/demos.module') },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRouting { }
