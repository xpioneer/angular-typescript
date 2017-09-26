import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login/login.component';
import { HeaderComponent, SidebarComponent, BreadCrumbComponent } from '../components/shared';

import { AppInterceptor } from "../utils/appInterceptor.service";
import { Params } from '../utils/params.service';
import { HelperService } from '../utils/helper.service';

import { AuthGuard }            from '../utils/auth/auth-guard.service';
import { AuthService }          from '../utils/auth/auth.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        SidebarComponent,
        BreadCrumbComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
  	    AppRouting,
        // 
        NgZorroAntdModule.forRoot(),
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AppInterceptor,
            multi: true
        },
        Params,
        HelperService,
        AuthGuard,
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
	constructor() {}
}
