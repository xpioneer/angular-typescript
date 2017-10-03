import { CommonModule }  from '@angular/common';
import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LoginComponent }         from './login.component';

@NgModule({
    imports: [
        FormsModule, ReactiveFormsModule,
        CommonModule,
        NgZorroAntdModule.forRoot(),
    ],
    declarations: [
        LoginComponent,
    ],
    providers: [
    ],
})
export class LoginModule {}
