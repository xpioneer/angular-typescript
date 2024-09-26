import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { CrisisListComponent } from './component'

@NgModule({
  declarations: [CrisisListComponent],
  exports: [CrisisListComponent], // 导出组件
  // imports: [CommonModule],
})
export class CrisisModule { }