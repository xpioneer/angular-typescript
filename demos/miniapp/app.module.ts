import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { AppRoutingModule } from './app-routing.module'; // 导入路由模块

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule], // 引入 BrowserModule 和 AppRoutingModule
  bootstrap: [AppComponent]
})
export class AppModule {}
