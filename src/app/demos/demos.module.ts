import { CommonModule }  from '@angular/common';
import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DemosComponent }    from './demos.component';
import { DemosRouting } from './demos.routing';
import { OutletComponent }   from './out-let.component';
import { UploadFileModule } from '@components/upload-file/upload-file.module';
import { ZorroAntdModule } from '@/antd/ngModule'

@NgModule({
    imports: [
        FormsModule, ReactiveFormsModule,
        UploadFileModule,
        CommonModule,
        DemosRouting,
        // NgZorroAntdModule.forRoot(),
        ZorroAntdModule,
    ],
    declarations: [
        OutletComponent,
        DemosComponent,
    ],
    providers: [ ],
})
export default class DemosModule {}
