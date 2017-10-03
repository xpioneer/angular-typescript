import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AddBankComponent } from './addbank/addbank.component';
import { BankListComponent } from './banklist/banklist.component';
import { BanksComponent } from './banks.component';
import { EditBankComponent } from './editbank/editbank.component';

const routes: Routes = [
    {
        path: '',
        component: BanksComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: BankListComponent },
            { path: 'add', component: AddBankComponent },
            { path: 'edit/:id', component: EditBankComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BanksRouting {}
