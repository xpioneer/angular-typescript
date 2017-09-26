import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';
import { UserModel } from '../model/user.model';

import { AddUserService } from './adduser.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './adduser.html',
  styles: []
})
export class AddUserComponent implements OnInit {
  isConfirmLoading = false;
  addUser: UserModel = new UserModel();
  @ViewChild('form') private form: NgForm;

  constructor(
    private router: Router,
    private addUserService: AddUserService,
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
      this.addUserService.addUser(this.addUser).subscribe((res: any)=>{
        this.isConfirmLoading = false;
        this.notification.success('成功', res.msg);
        this.router.navigate(['/user']);
      }, (err: any)=>{
        this.isConfirmLoading = false;
      });
    }
  }

  back() {
    this.router.navigate(['./user']);
  }

}

