import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { BanksComponent } from './banks.component';
import { BankListComponent } from './banklist/banklist.component';
import { AddBankComponent } from './addbank/addbank.component';
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
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BanksRouting{};
