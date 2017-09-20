import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { NzNotificationService } from 'ng-zorro-antd';
import { HelperService } from './helper.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    baseUrl: string = '/api';
    store: any;

    constructor(
      private helper: HelperService,
      private notification: NzNotificationService,
    ) {
      this.store = localStorage;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const request = req.clone({
        url: this.baseUrl + req.url,
        setHeaders: {
          'Authorization-User': this.store.getItem('ACCESS_TOKEN') || "no_token"
        },
        withCredentials: true
      });
      return next.handle(request).do((res: HttpResponse<any>) => {
          if(res instanceof HttpResponse){
            this.helper.successHelper(res);
          }
          return res.body;
        }, (err: HttpErrorResponse) => {
          if(err instanceof HttpErrorResponse){
            this.helper.errorHelper(err);
          }
          return err.error;
        });
    }
}