import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { MerchantComponent } from './merchant.component';
import { MerchantListComponent } from './merchantlist/merchantlist';
import { AddMerchantComponent } from './addmerchant/addmerchant';
import { EditMerchantComponent } from './editmerchant/editmerchant';

const routes: Routes = [
    {
        path: '',
        component: MerchantComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: MerchantListComponent },
            { path: 'add', component: AddMerchantComponent },
            { path: 'edit/:id', component: EditMerchantComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MerchantRouting{};
