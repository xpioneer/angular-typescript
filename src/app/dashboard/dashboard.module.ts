import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule }      from '@angular/core';
// import { NgZorroAntdModule } from 'ng-zorro-antd';
import { Dashboard } from './dashboard.component';
import { DashboardRouting } from './dashboard.routing';
import { DashBoardService } from './dashboard.service';
import { NzSelectModule } from '@/antd/module'

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    DashboardRouting,
    // NgZorroAntdModule.forRoot(),
    NzSelectModule,
  ],
  declarations: [
    Dashboard,
  ],
  providers: [
    DashBoardService,
  ],
})
export default class DashboardModule {}
