import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { OutletComponent } from './out-let.component';
import { DemosComponent } from './demos.component';

const routes: Routes = [
    {
        path: '',
        component: OutletComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: DemosComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemosRouting{};
