import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';
import { BankModel } from '../model/bank.model';
import { AddBankService } from './addbank.service';

@Component({
  selector: 'app-add-bank',
  templateUrl: './addbank.html',
  styles: [],
})
export class AddBankComponent implements OnInit {
  public formGroup: FormGroup;
  public isConfirmLoading = false;
  public addBank: BankModel = new BankModel();
  @ViewChild('form') private form: NgForm;

  public visible = {};
  public options: any[];
  public cityLists: any[] = [];
  public cityChecked = {};

  constructor (
    private router: Router,
    private fb: FormBuilder,
    private addBankService: AddBankService,
    private notification: NzNotificationService,
    ) {
  }

  public ngOnInit () {
    this.formGroup = this.fb.group({
        bankName         : [ null, [ Validators.required ] ],
        status           : [ null, [ Validators.required ] ],
        logoUrl          : [ null, [ Validators.required ] ],
        queryUrl         : [ null, [  ] ],
        adSlogan         : [ null, [ Validators.pattern(/^(\S){8,12}$/) ] ],
        label            : [ null, [ Validators.pattern(/^(\S){0,2}$/) ] ],
        serviceCity      : [ [  ], [  ] ],
    });
    this.getData();
  }

  public getData () {
    this.options = [{id: '0', name: '未生效'}, {id: '1', name: '有效'}];
    this.addBankService.getCityList().subscribe((res: any) => {
        if (res.success) {
        this.cityLists = res.data;
        }
    }, (err) => {
        this.notification.success('错误', err.msg);
    });
  }

  public save () {
    for (const i in this.form.controls) {
        this.form.controls[ i ].markAsDirty();
    }
    console.log(this.addBank, this.form);
    // if(this.formGroup.valid){
    //   this.formGroup.controls['serviceCity'].setValue(this.getSelectedCity());
    //   this.isConfirmLoading = true;
    //   this.addBankService.insertBank(this.formGroup.value).subscribe((res: any)=>{
    //     this.isConfirmLoading = false;
    //     if(res.success){
    //       this.notification.success('成功', res.msg);
    //       this.router.navigate(['/banks']);
    //     } else {
    //       this.notification.warning('警告', res.msg);
    //     }
    //   }, (err: any)=>{
    //     this.notification.error('警告', err.msg);
    //       this.isConfirmLoading = false;
    //   });
    // }
  }

  // getStatus(a: any){
  //   console.log(this.form.controls[a])
  //   return this.form.controls[a];
  // }

  public getFormControl (name: string) {
    return this.formGroup.controls[ name ];
  }

  public uploadSuccess (url: string) {
    this.formGroup.controls.logoUrl.setValue(url);
  }

  public show (i: number) {
    this.visible[i] = true;
  }

  public close (i: number) {
    this.visible[i] = false;
  }

  public getSelectedCity () {
    const arr = [];
    for (const key in this.cityChecked) {
        if (this.cityChecked[key]) {
        arr.push(Number(key));
        }
    }
    return arr;
  }

  public back () {
    this.router.navigate(['./banks']);
  }

}
