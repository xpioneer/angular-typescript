import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd';
import { NgForm } from '@angular/forms';
import { AuthService }      from '../../utils/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styles: [ `
    .login-form {
      max-width: 300px;
      margin: 0 auto;
    }

    .login-form-forgot {
      float: right;
    }

    .login-form-button {
      width: 100%;
    }
  `
  ]
})
export class LoginComponent implements OnInit {
  _window: any;
  @ViewChild('canvas') private canvas: ElementRef;
  @ViewChild('form') private form: NgForm;
  userInfo:UserModel = new UserModel();

  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) {
  }

  ngOnInit() {
    // 
  }

  login() {
    for (const i in this.form.controls) {
      this.form.controls[ i ].markAsDirty();
    }
    if(this.form.valid){
        this.authService.login(this.userInfo);
    }
  }

  
}

class UserModel {
  public username: string;
  public password: string;
}