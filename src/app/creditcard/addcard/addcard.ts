import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';
import { CreditCardModel } from '../model/creditcard.model';
import { AddCardService } from './addcard.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './addcard.html',
  styles: []
})
export class AddCardomponent implements OnInit {
  isConfirmLoading = false;
  addCard: CreditCardModel = new CreditCardModel();
  @ViewChild('form') private form: NgForm;

  // init data
  statusOptions = [{id:0, name:'未生效'},{id:1, name:'有效'}];
  levelOptions = [{id:0, name: '普通'},{id:1, name: '金卡'},{id:2, name: '白金卡'}];
  currencyOptions = [{id:0, name:'CNY'},{id:1, name:'多币种'}];
  feeOptions = [{id:0, name:'免首年，交易免年费'},{id:1, name:'终身免年费'},{id:2, name: '有年费'}];
  classifyOptions = [{id:0, name:'车主卡'},{id:1, name:'商旅卡'},{id:2, name: '网购卡'},{id:3, name:'超市卡'},{id:4, name:'女性卡'},{id:5, name:'小白卡'}];

  bankAjaxList:Array<any> = [];

  constructor(
    private router: Router,
    private addCardService: AddCardService,
    private notification: NzNotificationService
    ) {
  }

  ngOnInit() {

    this.searchChange();
  }

  save(){
    for (const i in this.form.controls) {
      this.form.controls[ i ].markAsDirty();
    }
    if(this.form.valid){
      this.isConfirmLoading = true;
      this.addCardService.insertCard(this.addCard).subscribe((res: any)=>{
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

  searchChange() {
    this.addCardService.getBankList().subscribe((res: any)=>{
      if(res.success){
        this.bankAjaxList = res.data;
      }
    },err=>{
      this.notification.success('错误', err.msg);
    });
  }
  
  back() {
    this.router.navigate(['./creditcard']);
  }
}

