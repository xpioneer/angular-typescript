import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable, Inject } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { NzNotificationService } from 'ng-zorro-antd';


@Injectable()
export class AppInterceptor implements HttpInterceptor {
    localStorage: any;
    @Inject('window') private window: any

    constructor(
        private notification: NzNotificationService,
      ) {
      this.localStorage = localStorage;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const request = req.clone({
        setHeaders: {
          'Authorization-User': this.localStorage.getItem('ACCESS_TOKEN')
        }
      });
      return next.handle(request).do((res: HttpResponse<any>) => {
          return res.body;
        }, (err: any)=>{
          if(err.status === 401){
            this.notification.error('未授权', '请重新登陆！');
          }else if(err.status === 500){
            this.notification.error('服务器错误', '请联系管理员！');
          }  else {
            return err.error;
          }
        });
    }
}