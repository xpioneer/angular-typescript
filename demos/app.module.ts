import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { LOCALE_ID, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router'
import { AppComponent }   from './app.component';
import { AppRoutingModule, routes }     from './app.routes';
import { CrisisModule } from './crisis-list/module'
import { HeroesModule } from './heroes-list/module'


registerLocaleData(zh);

@NgModule({
  // schemas: [],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    // RouterModule,
    AppRoutingModule,
    CrisisModule,
    HeroesModule,
  ],
  exports: [
  ],
  providers: [
    // provideRouter(routes), // use with RouterModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

}
