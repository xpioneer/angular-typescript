import { CommonModule }  from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DateTimeRangeComponent } from './datetime-picker.component';
import { NzDatePickerModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NzDatePickerModule, // important
  ],
  declarations: [
    DateTimeRangeComponent,
  ],
  providers: [
    //
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    DateTimeRangeComponent,
  ],
})
export class DateTimeRangeModule {}
