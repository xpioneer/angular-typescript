import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { CreditCardComponent } from './creditcard.component';
import { CardListComponent } from './cardlist/cardlist';
import { AddCardomponent } from './addcard/addcard';
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
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreditCardRouting{};
