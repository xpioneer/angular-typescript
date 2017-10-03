import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DemosRouting } from './demos.routing';
import { OutletComponent }   from './out-let.component';
import { DemosComponent }    from './demos.component';

@NgModule({
    imports: [
        FormsModule, ReactiveFormsModule,
        CommonModule,
        DemosRouting,
        NgZorroAntdModule.forRoot(),
    ],
    declarations: [
        OutletComponent,
        DemosComponent,
    ],
    providers: [ ]
})
export class DemosModule {}
