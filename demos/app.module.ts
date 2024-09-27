import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { LOCALE_ID, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { provideRouter } from '@angular/router'
import { AppComponent }   from './app.component';
import { AppRoutingModule }     from './app.routes';
import { CrisisModule } from './crisis-list/module'
import { HeroesModule } from './heroes-list/module'
import { routes } from './app.routes'


registerLocaleData(zh);

@NgModule({
  // schemas: [],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CrisisModule,
    HeroesModule,
    AppRoutingModule,
  ],
  exports: [
  ],
  providers: [
    provideRouter(routes),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

}
