import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AuthGuard } from '@utils/auth/auth-guard.service';
import { CrisisListComponent } from './crisis-list';
import { HeroesListComponent } from './heroes-list';

export const routes: Routes = [
  {path: 'crisis-list', component: CrisisListComponent},
  {path: 'heroes-list', component: HeroesListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemosRouting {}
