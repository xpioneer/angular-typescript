import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrisisListComponent } from './component'

@NgModule({
  declarations: [CrisisListComponent],
  exports: [CrisisListComponent], // 导出组件
  imports: [
    FormsModule,
  ],
})
export class CrisisModule { }