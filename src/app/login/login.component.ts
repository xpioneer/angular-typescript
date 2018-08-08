import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService }      from '@utils/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styles: [`
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
  `],
})
export class LoginComponent implements OnInit {
  public _window: any;
  @ViewChild('canvas') private canvas: ElementRef;
  @ViewChild('form') private form: NgForm;
  public userInfo: UserModel = new UserModel();

  constructor (private authService: AuthService) {
    console.log(this.authService, 'this.authService')
    if (this.authService.isLogged) {
      location.href = '/dashboard';
    }
  }

  public ngOnInit () {
    //
  }

  public login () {
    for (const i in this.form.controls) {
      this.form.controls[ i ].markAsDirty();
      this.form.controls[ i ].updateValueAndValidity()
    }
    if (this.form.valid) {
      this.authService.login(this.userInfo);
      this.userInfo = new UserModel();
    }
  }

}

class UserModel {
  public username: string;
  public password: string;
}
