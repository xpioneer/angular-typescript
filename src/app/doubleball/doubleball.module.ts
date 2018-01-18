import { CommonModule }  from '@angular/common';
import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DoubleBallComponent }         from './doubleball.component';
import { DoubleBallListComponent }  from './doubleballlist/doubleballlist';
import { DoubleBallListService }  from './doubleballlist/doubleballlist.service';
import { DoubleBallRouting }       from './doubleball.routing';

@NgModule({
    imports: [
        FormsModule, ReactiveFormsModule,
        CommonModule,
        DoubleBallRouting,
        NgZorroAntdModule.forRoot(),
    ],
    declarations: [
        DoubleBallComponent,
        DoubleBallListComponent,
    ],
    providers: [
        DoubleBallListService,
    ],
})
export class DoubleBallModule {}
