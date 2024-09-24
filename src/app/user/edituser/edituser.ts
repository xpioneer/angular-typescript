import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UserModel } from '../model/user.model';

import { EditUserService } from './edituser.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edituser.html',
  // styles: [],
})
export class EditUserComponent implements OnInit {
  public isConfirmLoading = false;
  public editUser: UserModel = new UserModel();
  @ViewChild('form') private form: NgForm;

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private editUserService: EditUserService,
    private notification: NzNotificationService,
  ) {
  }

  public ngOnInit () {
    this.route.params.subscribe((param) => {
      if (param.id) {
        this.getData(param.id);
      }
    }, (err) => {
      this.notification.warning('错误', '参数错误');
    });
  }

  public getData (id: any) {
    this.editUserService.getUser(id).subscribe((res: any) => {
      this.editUser = res.data;
    });
  }

  public save () {
    for (const i in this.form.controls) {
      this.form.controls[ i ].markAsDirty();
    }
    if (this.form.valid) {
      this.isConfirmLoading = true;
      this.editUserService.updateUser(this.editUser)
        .pipe(finalize(() => this.isConfirmLoading = false))
        .subscribe((res: any) => {
          this.router.navigate(['/user']);
        });
    }
  }

  public back () {
    this.router.navigate(['./user']);
  }

}
