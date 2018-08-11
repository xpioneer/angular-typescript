import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService }   from '@utils/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // styleUrls : ['./header.component.less'],
  styles: [`
    .logo{
      display: inline-block;
      margin: 15px;
      width:34px;
      height:34px;
      background: url('/assets/images/logo.svg') no-repeat center center;
      background-size: cover;
      animation: rotate 6s linear 0s infinite normal running;
      transform-origin: center center;
      // transition: all 0.3s;

      &:hover{
        animation-play-state: paused;
      }
    }
    .sys-name{
      font-size: 16px;
      color: #fff;
      margin: 28px 0 0;
      display: inline-block;
      vertical-align: top;
    }
    .user-info{
      float: right;
      margin: 20px 20px 0 0;
    }

    @keyframes rotate{
      from{
        transform: rotateZ(0deg)
      }
      to{
        transform: rotateZ(360deg)
      }
    }
  `]
})
export class HeaderComponent implements OnInit {
  public store: any;
  public noticeOpened: boolean;
  public userInfo: object = {};

  constructor (private authService: AuthService) {
    this.store = localStorage;
    this.noticeOpened = JSON.parse(this.store.getItem('NOTICE_OPEN') ? this.store.getItem('NOTICE_OPEN') : 'false')
  }

  public ngOnInit () {
    this.userInfo = JSON.parse(this.store.getItem('USER_INFO')) || {};
  }

  public toggleNotice () {
    this.noticeOpened = !this.noticeOpened;
    this.store.setItem('NOTICE_OPEN', this.noticeOpened)
  }

  public logout () {
    this.authService.logout();
  }
}
