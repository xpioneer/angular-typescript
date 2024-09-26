import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LOCALE_ID, NgModule, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular'
import { UserOutline, LockOutline, SettingOutline, AppstoreOutline, CalculatorOutline, LineChartOutline, SmileOutline, BulbOutline, PlusOutline } from '@ant-design/icons-angular/icons'

// import { BreadCrumbComponent, HeaderComponent, SidebarComponent } from '../components/shared';
import { AppComponent }   from './app.component';
import { routes }     from './app.routes';
// import { HomeComponent }  from './home';
// import { LoginComponent } from './login/login.component';
// import { DemosRouting } from './demos/demos.routing'

// import { NzMenuModule, NzPopoverModule } from '@/antd/module'
// import { NzMenuDirective } from '@/antd/directive'
// import { ZorroAntdModule }  from '@/antd/ngModule'

registerLocaleData(zh);
const icons: IconDefinition[] = [UserOutline, LockOutline, SettingOutline, AppstoreOutline, CalculatorOutline, LineChartOutline, SmileOutline, BulbOutline, PlusOutline]

@NgModule({
  // schemas: [],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // FormsModule,
    // ReactiveFormsModule,
    // HttpClientModule,
    // RouterModule,
    // DashboardRouting,
    //
    // NgZorroAntdModule.forRoot(),
    // ZorroAntdModule,
    // RouterOutlet,
    // NzPopoverModule,
  ],
  exports: [

    // NzMenuModule,
  ],
  providers: [
    provideRouter(routes),
    // { provide: NZ_I18N, useValue: zh_CN },
    // { provide: NZ_ICONS, useValue: icons },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpClientInterceptor,
    //   multi: true,
    // },
    // Params,
    // HelperService,
    // AuthGuard,
    // AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule implements OnInit {
  constructor () {}

  ngOnInit() {
    console.log("demo app ngOnInit,:", this)
  }
}
