import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AddCardomponent } from './addcard/addcard';
import { CardListComponent } from './cardlist/cardlist';
import { CreditCardComponent } from './creditcard.component';
import { EditCreditomponent } from './editcard/editcard';

const routes: Routes = [
    {
        path: '',
        component: CreditCardComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: CardListComponent },
            { path: 'add', component: AddCardomponent },
            { path: 'edit/:id', component: EditCreditomponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CreditCardRouting {}
