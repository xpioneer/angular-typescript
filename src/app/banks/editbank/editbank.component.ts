import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';
import { EditBankService } from './editbank.service';

@Component({
  selector: 'app-edit-bank',
  templateUrl: './editbank.html',
  styles: []
})
export class EditBankComponent implements OnInit {
  formGroup: FormGroup;
  isConfirmLoading = false;

  resetForm() {
    // this.formGroup.reset();
  }

  visible = {};
  options: Array<object> = [];
  _cityList:any = [];
  cityLists: Array<any> = [];
  cityChecked = {};
  imgSrc: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private editBankService: EditBankService,
    private notification: NzNotificationService
    ) {
  }

  ngOnInit() {
    this.options = [{id:0, name:'未生效'},{id:1, name:'有效'}];
    this.formGroup = this.fb.group({
      id: [null],
      bankName         : [ null, [ Validators.required ] ],
      status           : [ null, [ Validators.required ] ],
      logoUrl          : [ null, [ Validators.required ] ],
      queryUrl         : [ null, [  ] ],
      adSlogan         : [ null, [ Validators.pattern(/^(\S){8,12}$/) ] ],
      label            : [ null, [ Validators.pattern(/^(\S){0,2}$/) ] ],
      serviceCity      : [ [  ], [  ] ]
    });

    let id = this.route.params['value']['id'];
    if(id) {
      this.getData(id);
      this.getCityList();
    }
  }

  getData(id: any) {
    this.editBankService.getBank(id).subscribe((res: any)=>{
      if(res.success){
        let data = res.data;
        for(let key in this.formGroup.value){
          this.formGroup.controls[key].setValue(data[key]);
        }
        for(let i of data.serviceCity){
          this.cityChecked[i] = true;
        }
        this.imgSrc = this.formGroup.controls['logoUrl'].value;
      }
    },(err: any)=>{
      this.notification.error('错误', err.msg);
    });
  }

  getCityList(){
    this.editBankService.getCityList().subscribe((res: any)=>{
      if(res.success){
        this.cityLists = res.data;
      }
    }, (err: any)=>{
      this.notification.error('错误', err.msg);
    });
  }

  save(){
    for (const i in this.formGroup.controls) {
      this.formGroup.controls[ i ].markAsDirty();
    }
    if(this.formGroup.valid){
      this.formGroup.controls['serviceCity'].setValue(this.getSelectedCity());
      this.isConfirmLoading = true;
      this.editBankService.updateBank(this.formGroup.value).subscribe((res: any)=>{
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

