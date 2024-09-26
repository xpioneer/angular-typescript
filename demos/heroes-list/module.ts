import { Component, NgModule, OnInit, ViewEncapsulation } from '@angular/core';
import { HeroesListComponent } from './component'
// import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeroesListComponent],
  exports: [HeroesListComponent], // 导出组件
  // imports: [CommonModule]
})
export class HeroesModule { }