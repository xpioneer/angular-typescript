import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';
import { AddBankService } from './addbank.service';

@Component({
  selector: 'app-add-bank',
  templateUrl: './addbank.html',

  styles: []
})
export class AddBankComponent implements OnInit {
  formGroup: FormGroup;
  isConfirmLoading = false;
  resetForm() {
    // this.formGroup.reset();
  }

  visible = {};
  options: Array<any>;
  cityLists: Array<any> = [];
  cityChecked = {};

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private addBankService: AddBankService,
    private notification: NzNotificationService
    ) {
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      bankName         : [ null, [ Validators.required ] ],
      status           : [ null, [ Validators.required ] ],
      logoUrl          : [ null, [ Validators.required ] ],
      queryUrl         : [ null, [  ] ],
      adSlogan         : [ null, [ Validators.pattern(/^(\S){8,12}$/) ] ],
      label            : [ null, [ Validators.pattern(/^(\S){0,2}$/) ] ],
      serviceCity      : [ [  ], [  ] ]
    });

    this.getData();
  }

  getData() {
    this.options = [{id:'0', name:'未生效'},{id:'1', name:'有效'}];
    this.addBankService.getCityList().subscribe((res: any) => {
      if(res.success){
        this.cityLists = res.data;
      }
    },err=>{
      this.notification.success('错误', err.msg);
    });
  }

  save(){
    for (const i in this.formGroup.controls) {
      this.formGroup.controls[ i ].markAsDirty();
    }
    if(this.formGroup.valid){
      this.formGroup.controls['serviceCity'].setValue(this.getSelectedCity());
      this.isConfirmLoading = true;
      this.addBankService.insertBank(this.formGroup.value).subscribe((res: any)=>{
        this.isConfirmLoading = false;
        if(res.success){
          this.notification.success('成功', res.msg);
          this.router.navigate(['/banks']);
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

  uploadSuccess(url:string){
    this.formGroup.controls['logoUrl'].setValue(url);
  }

  show(i: number){
    this.visible[i] = true;
  }

  close(i: number) {
    this.visible[i] = false;
  }

  getSelectedCity(){
    let arr = [];
    for(let key in this.cityChecked){
      if(this.cityChecked[key]){
        arr.push(Number(key));
      }
    }
    return arr;
  }

  back() {
    this.router.navigate(['./banks']);
  }

}

