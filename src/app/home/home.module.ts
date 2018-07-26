import { CommonModule }  from '@angular/common';
import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule }     from '@angular/platform-browser';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HomeComponent }    from './home.component';
import { AuthService }       from '@utils/auth/auth.service';

@NgModule({
  imports: [
    FormsModule, ReactiveFormsModule,
    CommonModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [
    HomeComponent,
  ],
  providers: [
    AuthService
  ],
})
export class HomeModule {}
