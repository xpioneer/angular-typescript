import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, NonNullableFormBuilder, Validators } from '@angular/forms';
import { AuthService }      from '@utils/auth/auth.service';
import { finalize } from 'rxjs';
import { drawBubbles } from './bubble'

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  // styleUrl: './style.less',
  styles: [`
    canvas {
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, #87ceeb55, #87ceeb);
    }
    .login-form {
      position: relative;
      width: 300px;
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
  public loading: boolean = false;
  public _window: any;
  @ViewChild('canvas') private canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('form') private form: NgForm;
  public userInfo: UserModel = new UserModel();
  loginForm: ValidateForm<LoginForm>;

  constructor (
    private http: HttpClient,
    private authService: AuthService,
    private fb: NonNullableFormBuilder
  ) {
    if (this.authService.isLogged) {
      location.href = '/dashboard';
    }
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [false]
    });
  }

  public ngOnInit () {
    //
  }
  
  ngAfterViewInit() {
    drawBubbles(this.canvas.nativeElement)
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // 表单数据提交逻辑
      console.log(this.loginForm.value);
    } else {
      const controls = this.loginForm.controls
      Object.values(controls).forEach(control => {
        control.markAsDirty();
        control.updateValueAndValidity();
      })
    }
  }

  public login () {
    const form = this.form.form
    const controls = form.controls
    console.log(form.valid, controls)
    for (const i in controls) {
      controls[ i ].markAsDirty();
      controls[ i ].updateValueAndValidity();
    }
    if (form.valid) {
      // this.authService.login(this.userInfo);
      // this.userInfo = new UserModel();
      this.loading = true;
      this.http.post('/login', this.userInfo)
      .pipe(finalize(() => { this.loading = false; }))
      .subscribe((res: any) => {
        this.authService.isLogged = true;
        localStorage.setItem('ACCESS_TOKEN', res.msg);
        localStorage.setItem('USER_INFO', JSON.stringify(res.data));
        location.href = !!this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
      }, (err: any) => { });
    }
  }

}

class UserModel {
  public username: string;
  public password: string;
}
