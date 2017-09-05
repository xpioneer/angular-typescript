import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';

import { EditMerchantService } from './editmerchant.service';

@Component({
  selector: 'app-edit-merchant',
  templateUrl: './editmerchant.html',
  styles: []
})
export class EditMerchantComponent implements OnInit {
  formGroup: FormGroup;
  isConfirmLoading = false;
  resetForm() {
    // this.formGroup.reset();
  }

  options = [{id:0, name:'未生效'},{id:1, name:'有效'}];
  merchantTypeList = [{id:0, name:'银行'},{id:1, name:'一级代理'},{id:2, name:'二级代理'},{id:3, name:'三级代理'}];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private editMerchantService: EditMerchantService,
    private notification: NzNotificationService
    ) {
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      id: [null],
      merchantName    : [ null, [ Validators.required ] ],
      status          : [ null, [ Validators.required ] ],
      merchantType    : [ null, [ Validators.required ] ],
      contactsName    : [ null ],
      contactsTel     : [ null ],
      business        : [ null ],
      businesTel      : [ null ]
    });

    let id = this.route.params['value']['id'];
    if(id){
      this.getData(id);
    }
    
  }

  getData(id: any) {
    this.editMerchantService.getMerchant(id).subscribe((res: any) => {
      if(res.success){
        for(let key in this.formGroup.value){
          this.formGroup.controls[key].setValue(res.data[key]);
        }
      }
    });
  }

  save(){
    for (const i in this.formGroup.controls) {
      this.formGroup.controls[ i ].markAsDirty();
    }
    if(this.formGroup.valid){
      this.isConfirmLoading = true;
      this.editMerchantService.updateMerchant(this.formGroup.value).subscribe((res: any)=>{
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

