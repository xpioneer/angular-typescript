import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';
import { MerchantModel } from '../model/merchant.model';

import { EditMerchantService } from './editmerchant.service';

@Component({
  selector: 'app-edit-merchant',
  templateUrl: './editmerchant.html',
  styles: []
})
export class EditMerchantComponent implements OnInit {
  isConfirmLoading = false;
  editMerchant: MerchantModel = new MerchantModel();
  @ViewChild('form') private form: NgForm;

  options = [{id:0, name:'未生效'},{id:1, name:'有效'}];
  merchantTypeList = [{id:0, name:'银行'},{id:1, name:'一级代理'},{id:2, name:'二级代理'},{id:3, name:'三级代理'}];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private editMerchantService: EditMerchantService,
    private notification: NzNotificationService
    ) {
  }

  ngOnInit() {
    let id = this.route.params['value']['id'];
    if(id){
      this.getData(id);
    }
    
  }

  getData(id: any) {
    this.editMerchantService.getMerchant(id).subscribe((res: any) => {
      if(res.success){
        this.editMerchant = res.data;
      }
    });
  }

  save(){
    for (const i in this.form.controls) {
      this.form.controls[ i ].markAsDirty();
    }
    if(this.form.valid){
      this.isConfirmLoading = true;
      this.editMerchantService.updateMerchant(this.editMerchant).subscribe((res: any)=>{
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

