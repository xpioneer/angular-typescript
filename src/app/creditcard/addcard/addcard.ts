import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

import { NzNotificationService } from 'ng-zorro-antd';

import { AddCardService } from './addcard.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './addcard.html',
  styles: []
})
export class AddCardomponent implements OnInit {
  formGroup: FormGroup;
  isConfirmLoading = false;

  // init data
  statusOptions = [{id:0, name:'未生效'},{id:1, name:'有效'}];
  levelOptions = [{id:0, name: '普通'},{id:1, name: '金卡'},{id:2, name: '白金卡'}];
  currencyOptions = [{id:0, name:'CNY'},{id:1, name:'多币种'}];
  feeOptions = [{id:0, name:'免首年，交易免年费'},{id:1, name:'终身免年费'},{id:2, name: '有年费'}];
  classifyOptions = [{id:0, name:'车主卡'},{id:1, name:'商旅卡'},{id:2, name: '网购卡'},{id:3, name:'超市卡'},{id:4, name:'女性卡'},{id:5, name:'小白卡'}];

  bankAjaxList:Array<any> = [];

  rangeValidator = (control: FormControl): { [s: string]: boolean } => {
    let val = control.value;
    if (val && val.length >= 5 && val.length <= 10) {
      return { required: false };
    } else {
      return { required: true };
    }
  };

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private addCardService: AddCardService,
    private notification: NzNotificationService
    ) {
  }

  ngOnInit() {
    // 
    this.formGroup = this.fb.group({
      creditCardName  : [ null, [ Validators.required, Validators.minLength(5), Validators.maxLength(10) ] ],
      status          : [ null, [ Validators.required ] ],
      logo            : [ '', [ Validators.required ] ],
      level           : [ null, [ Validators.required ] ],
      currency        : [ null, [ Validators.required ] ],
      annualFee       : [ null, [ Validators.required ] ],
      classifyId      : [ null, [ Validators.required ] ],
      bankId          : [ null, [ Validators.required ] ],
      introduction    : [ null, [ Validators.maxLength(300) ] ],
      label1          : [ null, [ Validators.pattern(/^(\S){0,2}$/) ] ],
      label2          : [ null, [ Validators.pattern(/^(\S){0,2}$/) ] ],
      adSlogan1       : [ null, [ Validators.pattern(/^(\S){8,12}$/) ] ],
      adSlogan2       : [ null, [ Validators.pattern(/^(\S){8,12}$/) ] ],
    });

    this.searchChange(null);
  }

  save(){
    for (const i in this.formGroup.controls) {
      this.formGroup.controls[ i ].markAsDirty();
    }
    if(this.formGroup.valid){
      this.isConfirmLoading = true;
      this.addCardService.insertCard(this.formGroup.value).subscribe((res: any)=>{
        this.isConfirmLoading = false;
        if(res.success){
          this.notification.success('成功', res.msg);
          this.router.navigate(['/creditcard']);
        } else {
          this.notification.warning('警告', res.msg);
        }
      }, (err: any)=>{
        this.isConfirmLoading = false;
        this.notification.error('警告', err.msg);
      });
    }
  }

  getFormControl(name: string) {
    return this.formGroup.controls[ name ];
  }

  searchChange(event: any) {
    this.addCardService.getBankList().subscribe((res: any)=>{
      if(res.success){
        this.bankAjaxList = res.data;
      }
    },err=>{
      this.notification.success('错误', err.msg);
    });
  }

  uploadSuccess(url:string){
    this.formGroup.controls['logo'].setValue(url);
  }
  
  back() {
    this.router.navigate(['./creditcard']);
  }
}

