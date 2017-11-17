import { CommonModule }  from '@angular/common';
import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SystemLogComponent }  from './systemlog.component';
import { SystemLogListComponent }  from './systemloglist/systemloglist';
import { SystemLogListService }  from './systemloglist/systemloglist.service';
import { SystemLogRouting }       from './systemlog.routing';

@NgModule({
    imports: [
        FormsModule, ReactiveFormsModule,
        CommonModule,
        SystemLogRouting,
        NgZorroAntdModule.forRoot(),
    ],
    declarations: [
        SystemLogComponent,
        SystemLogListComponent,
    ],
    providers: [
        SystemLogListService,
        // EditArticleService,
    ],
})
export class SystemLogModule {}
