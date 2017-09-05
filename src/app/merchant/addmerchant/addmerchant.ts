import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';

import { AddMerchantService } from './addmerchant.service';

@Component({
  selector: 'app-add-merchant',
  templateUrl: './addmerchant.html',

  styles: []
})
export class AddMerchantComponent implements OnInit {
  formGroup: FormGroup;
  isConfirmLoading = false;
  resetForm() {
    // this.valselect = {};
  }

  options = [{id:0, name:'未生效'},{id:1, name:'有效'}];
  merchantTypeList = [{id:0, name:'银行'},{id:1, name:'一级代理'},{id:2, name:'二级代理'},{id:3, name:'三级代理'}];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private addMerchantService: AddMerchantService,
    private notification: NzNotificationService
    ) {
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      merchantName    : [ null, [ Validators.required ] ],
      status          : [ '', [ Validators.required ] ],
      merchantType    : [ null, [ Validators.required ] ],
      contactsName    : [ null ],
      contactsTel     : [ null ],
      business        : [ null ],
      businesTel      : [ null ]
    });
    
  }

  save(){
    for (const i in this.formGroup.controls) {
      this.formGroup.controls[ i ].markAsDirty();
    }
    if(this.formGroup.valid){
      this.isConfirmLoading = true;
      this.addMerchantService.insertMerchant(this.formGroup.value).subscribe((res: any)=>{
        this.isConfirmLoading = false;
        if(res.success){
          this.notification.success('成功', res.msg);
          this.router.navigate(['/merchant']);
        } else {
          this.notification.warning('警告', res.msg);
        }
      }, (err: any)=>{
        this.notification.error('警告', err.msg);
        this.isConfirmLoading = false;
      });
    }
  }

  getFormControl(name: string) {
    return this.formGroup.controls[ name ];
  }

  back() {
    this.router.navigate(['./merchant']);
  }

}

