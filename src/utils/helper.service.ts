import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';

@Injectable()
export class HelperService {
    store: any;

    constructor(
      private router: Router,
      private notification: NzNotificationService,
    ) {
      this.store = localStorage;
    }

    successHelper(res: HttpResponse<any>){
      switch (res.status) {
        case 201:
          this.notification.success('成功', '操作成功');
          break;
        default:
          // 
          break;
      }
    }

    errorHelper(err: HttpErrorResponse){
      console.log(err)
      switch (err.status) {
        case 400:
          let arr = err.url.split("/api");
          if(arr[arr.length-1] === '/login'){
            this.notification.error('错误', '用户名或密码错误');
          }else{
            this.notification.error('错误', '参数错误,请检查');
          }
          break;
        case 401:
          this.store.clear();
          this.notification.error('未授权', '请重新登录');
          setTimeout(()=>{
            this.router.navigate(['/login']);
          }, 1000);
          break;
        case 403:
          this.notification.error('错误', '禁止访问');
          break;
        case 404:
          this.notification.error('未找到', '未找到资源,请检查');
          break;
        case 405:
          this.notification.error('错误', '此方法不允许');
          break;
        case 406:
          this.notification.error('错误', '此方法不接受,请检查');
          break;
        case 500:
          this.notification.error('错误', err.error.msg||err.error.data);
          break;
        case 406:
          this.notification.error('错误', '此方法不接受,请检查');
          break;
        default:
          this.notification.error('错误', '服务端内部未知错误');
          break;
      }
    }
}