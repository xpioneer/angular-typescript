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


@Injectable()
export class AppInterceptor implements HttpInterceptor {
    localStorage: any;
    @Inject('window') private window: any

    constructor(
      // private authService: AuthService
      ) {
      this.localStorage = localStorage;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const request = req.clone({
        setHeaders: {
          'Authorization-User': `this.localStorage.getItem('ACCESS_TOKEN')`
        }
      });
      return next.handle(request).do((res: any)=>{
          console.log(res, 'res');
          return res.data;
        }, (err: any)=>{
          console.log(err, err instanceof HttpErrorResponse);
          if(err.status === 401){
            console.log('relogin')
          } else {
            return err.error;
          }
        });
    }
}