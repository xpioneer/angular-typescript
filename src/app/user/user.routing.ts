import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AddUserComponent } from './adduser/adduser';
import { EditUserComponent } from './edituser/edituser';
import { UserComponent } from './user.component';
import { UserListComponent } from './userlist/userlist';

const routes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: UserListComponent },
            { path: 'add', component: AddUserComponent },
            { path: 'edit/:id', component: EditUserComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserRouting {}
