import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule }  from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UploadFileComponent } from './upload-file.component'

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        UploadFileComponent,
    ],
    exports: [
        UploadFileComponent,
    ]
})
export class UploadFileModule {}
