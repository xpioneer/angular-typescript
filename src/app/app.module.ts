import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AppRouting } from './app.routing';
import { AppInterceptor } from "../utils/appInterceptor.service";
import { Params } from '../utils/params.service'
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { HeaderComponent, SidebarComponent, BreadCrumbComponent } from '../components/shared';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        SidebarComponent,
        BreadCrumbComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,ReactiveFormsModule,
  	    HttpClientModule,HttpModule,
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
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
	constructor() {}
}
