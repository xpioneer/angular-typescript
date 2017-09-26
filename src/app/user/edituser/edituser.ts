import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';
import { UserModel } from '../model/user.model';

import { EditUserService } from './edituser.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edituser.html',
  styles: []
})
export class EditUserComponent implements OnInit {
  isConfirmLoading = false;
  editUser: UserModel = new UserModel();
  @ViewChild('form') private form: NgForm;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private editUserService: EditUserService,
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
    this.editUserService.getUser(id).subscribe((res: any) => {
      this.editUser = res.data;
    });
  }

  save(){
    for (const i in this.form.controls) {
      this.form.controls[ i ].markAsDirty();
    }
    if(this.form.valid){
      this.isConfirmLoading = true;
      this.editUserService.updateUser(this.editUser).subscribe((res: any)=>{
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

