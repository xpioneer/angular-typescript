import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';
import { MerchantModel } from '../model/merchant.model';

import { AddMerchantService } from './addmerchant.service';

@Component({
  selector: 'app-add-merchant',
  templateUrl: './addmerchant.html',

  styles: []
})
export class AddMerchantComponent implements OnInit {
  isConfirmLoading = false;
  addMerchant: MerchantModel = new MerchantModel();
  @ViewChild('form') private form: NgForm;

  options = [{id:0, name:'未生效'},{id:1, name:'有效'}];
  merchantTypeList = [{id:0, name:'银行'},{id:1, name:'一级代理'},{id:2, name:'二级代理'},{id:3, name:'三级代理'}];

  constructor(
    private router: Router,
    private addMerchantService: AddMerchantService,
    private notification: NzNotificationService
    ) {
  }

  ngOnInit() {
    // 
  }

  save(){
    for (const i in this.form.controls) {
      this.form.controls[ i ].markAsDirty();
    }
    if(this.form.valid){
      this.isConfirmLoading = true;
      this.addMerchantService.insertMerchant(this.addMerchant).subscribe((res: any)=>{
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

  back() {
    this.router.navigate(['./merchant']);
  }

}

