import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { RouterModule } from '@angular/router';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular'
import { UserOutline, LockOutline, SettingOutline, AppstoreOutline, CalculatorOutline, LineChartOutline, SmileOutline, BulbOutline, PlusOutline } from '@ant-design/icons-angular/icons'

import { BreadCrumbComponent, HeaderComponent, SidebarComponent } from '../components/shared';
import { AppComponent }   from './app.component';
import { AppRouting }     from './app.routing';
import { HomeComponent }  from './home';
import { LoginComponent } from './login/login.component';

import { HttpClientInterceptor }    from '@utils/httpInterceptor';
import { AuthGuard }         from '@utils/auth/auth-guard.service';
import { AuthService }       from '../utils/auth/auth.service';
import { HelperService }     from '../utils/httpInterceptor/helper.service';
import { Params }            from '../utils/params.service';
// import { NzMenuModule, NzPopoverModule } from '@/antd/module'
// import { NzMenuDirective } from '@/antd/directive'
import { ZorroAntdModule }  from '@/antd/ngModule'

registerLocaleData(zh);
const icons: IconDefinition[] = [UserOutline, LockOutline, SettingOutline, AppstoreOutline, CalculatorOutline, LineChartOutline, SmileOutline, BulbOutline, PlusOutline]

@NgModule({
  // schemas: [],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    BreadCrumbComponent,
    // NzPageHeaderBreadcrumbDirective,
    // NzMenuDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClientModule,
    // RouterModule,
    AppRouting,
    //
    // NgZorroAntdModule.forRoot(),
    ZorroAntdModule,
    // NzMenuModule,
    // NzPopoverModule,
  ],
  exports: [

    // NzMenuModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: NZ_ICONS, useValue: icons },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClientInterceptor,
      multi: true,
    },
    Params,
    HelperService,
    AuthGuard,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor () {}
}
