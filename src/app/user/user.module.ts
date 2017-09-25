import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { UserRouting }       from './user.routing';
import { UserComponent } from './user.component';
import { UserListComponent } from './userlist/userlist';
import { AddUserComponent } from './adduser/adduser';
import { EditUserComponent } from './edituser/edituser';
import { UserListService } from './userlist/userlist.service';
import { AddUserService }  from './adduser/adduser.service';
import { EditUserService }  from './edituser/edituser.service';

@NgModule({
    imports: [
        FormsModule, ReactiveFormsModule,
        CommonModule,
        UserRouting,
        NgZorroAntdModule.forRoot()
    ],
    declarations: [
        UserComponent,
        UserListComponent,
        AddUserComponent,
        EditUserComponent,
    ],
    providers: [
        UserListService,
        AddUserService,
        EditUserService,
    ]
})
export class UserModule {}
