import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { DemosComponent } from './demos.component';
import { OutletComponent } from './out-let.component';

const routes: Routes = [
    {
        path: '',
        component: OutletComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: DemosComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DemosRouting {}
