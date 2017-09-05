import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UploadFileComponent } from './upload-file.component'

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        UploadFileComponent,
    ],
    exports: [
        UploadFileComponent,
    ]
})
export class UploadFileModule {}
