import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule }      from '@angular/core';
// import { NgZorroAntdModule } from 'ng-zorro-antd';
import { Dashboard } from './dashboard.component';
import { DashboardRouting } from './dashboard.routing';
import { DashBoardService } from './dashboard.service';
import { NzSelectModule } from '@/antd/module'
import { ZorroAntdModule } from '@/antd/ngModule'

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    DashboardRouting,
    // NgZorroAntdModule.forRoot(),
    ZorroAntdModule,
    // NzSelectModule,
  ],
  declarations: [
    Dashboard,
  ],
  providers: [
    DashBoardService,
  ],
})
export default class DashboardModule {}
