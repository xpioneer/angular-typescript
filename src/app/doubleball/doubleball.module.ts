import { CommonModule }  from '@angular/common';
import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DoubleBallComponent }         from './doubleball.component';
import { DoubleBallListComponent }  from './doubleballlist/doubleballlist';
import { DoubleBallListService }  from './doubleballlist/doubleballlist.service';
import { DoubleBallRouting }       from './doubleball.routing';
import { DoubleBallDirective }       from './doubleballlist/doubleball.directive';
import { ZorroAntdModule } from '@/antd/ngModule'

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    DoubleBallRouting,
    // NgZorroAntdModule.forRoot(),
    ZorroAntdModule,
  ],
  declarations: [
    DoubleBallComponent,
    DoubleBallListComponent,

    DoubleBallDirective,
  ],
  providers: [
    DoubleBallListService,
  ],
})
export default class DoubleBallModule {}
