import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { ChartComponent } from './chart.component';
import { OutletComponent } from './out-let.component';

const routes: Routes = [
    {
        path: '',
        component: OutletComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: ChartComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChartRouting {}
