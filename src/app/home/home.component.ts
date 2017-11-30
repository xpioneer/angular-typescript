import { Component, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NzNotificationService } from 'ng-zorro-antd';
import * as Moment from 'moment';

const _DEV_ = process.env.NODE_ENV === 'development';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: [``],
})
export class HomeComponent implements OnDestroy {
  private counter: number = 0;
  private timer: any = null;
  private host: string = _DEV_ ? 'localhost:8802' : '45.77.218.105:8100';
  private wsHost: string;
  private ws: any;
  private wsInfo: WSInfoModel = new WSInfoModel();

  private openWS () {
    if (!navigator.onLine) {
      this.notification.error('错误', '请检查网络连接!');
      return;
    }
    this.ws = null;
    this.ws = new WebSocket(this.wsHost);
    this.ws.onopen = () => {
      this.counter = 0;
      this.ws.send('connect...');
    };
    //
    this.ws.onmessage = (data: any) => {
      this.wsInfo = JSON.parse(data.data).data;
      this.notification.html(`<strong>访问信息</strong>
        <p class="sys_log_p">ip: ${this.wsInfo.ip}</p>
        <p class="sys_log_p">url: ${this.wsInfo.url}</p>
        <p class="sys_log_p">客户端: ${this.wsInfo.agent}</p>
        <p class="sys_log_p">时间: ${Moment(this.wsInfo.created_at).format('YYYY-MM-DD HH:mm:ss')}</p>`, {});
    };
    //
    this.ws.onclose = (data: any) => {
      console.log(data);
      this.reOpen();
    };
    //
    this.ws.onerror = (err: any) => {
      console.log(err);
      this.reOpen();
    };
  }

  private reOpen () {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      if (this.counter < 10) {
        console.log(this.ws.readyState, this.counter, 'counter');
        if (this.ws.CLOSED === this.ws.readyState) {
          this.counter++;
          console.log('reopen');
          this.openWS();
        }
      }else {
        this.notification.error('错误', '请刷新网页重新连接通知!', {nzDuration: 0});
      }
    }, 6000);

  }

  constructor (private notification: NzNotificationService) {
    this.wsHost = 'ws://' + this.host + `/?Authorization-User=${localStorage.getItem('ACCESS_TOKEN')}`;
  }

  public ngOnChanges () {
    // console.log('ngOnChanges');
  }

  public ngOnInit () {
    console.log('ngOnInit');
  }

  public ngDoCheck () {
    // console.log('ngDoCheck');
  }

  public ngAfterContentInit () {
    console.log('ngAfterContentInit');
  }

  public ngAfterContentChecked () {
    // console.log('ngAfterContentChecked');
  }

  public ngAfterViewInit () {
    console.log('ngAfterViewInit');
    this.openWS();
    // this.ws = new WebSocket(this.wsHost);
    // this.open();

    // this.ws.onmessage = (data: any) => {
    //   console.log('message', data);
    //   const json = JSON.parse(data.data);
    //   this.notification.info('提示', json.data);
    // };

    // this.ws.onclose = (data: any) => {
    //   this.reopen();
    //   console.log('WebSocketClosed!', data);
    // };
    // this.ws.onerror = (err: any) => {
    //     this.reopen();
    //     console.log('err:', err);
    // };
  }

  public ngAfterViewChecked () {
    // console.log('ngAfterViewChecked');
  }

  public ngOnDestroy () {
    clearTimeout(this.timer);
  }

}

class WSInfoModel {
  public ip: string;
  public created_at: string;
  public url: string;
  public agent: string;
}
