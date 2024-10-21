import { CommonModule }  from '@angular/common';
import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DateTimeRangeModule } from '@components/datetime-picker/datetime-picker.module';
import { SystemLogComponent }  from './systemlog.component';
import { SystemLogListComponent }  from './systemloglist/systemloglist';
import { SystemLogListService }  from './systemloglist/systemloglist.service';
import { SystemLogDetailComponent }  from './systemlogdetail/systemlogdetail';
import { SystemLogDetailService }  from './systemlogdetail/systemlogdetail.service';
import { SystemLogRouting }       from './systemlog.routing';
import { ZorroAntdModule } from '@/antd/ngModule'
import { NzFlexDirective, } from 'ng-zorro-antd/flex'
import { NzGridModule, NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid'

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SystemLogRouting,
    DateTimeRangeModule,
    // NgZorroAntdModule.forRoot(),
    ZorroAntdModule,
    // NzFlexDirective,
    NzGridModule,
    // NzColDirective,
  ],
  declarations: [
    SystemLogComponent,
    SystemLogListComponent,
    SystemLogDetailComponent,
  ],
  providers: [
    SystemLogListService,
    SystemLogDetailService,
  ],
})
export default class SystemLogModule {}
