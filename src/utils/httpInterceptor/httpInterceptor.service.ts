import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { HelperService } from './helper.service';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {
  public baseUrl: string = '/api';
  public store: any;

  constructor (private helper: HelperService) {
    this.store = localStorage;
  }

  public intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isHttpEntry = /^http/.test(req.url)
    const url = `${isHttpEntry ? '' : this.baseUrl}${req.url}`
    const request = req.clone({
      url,
      setHeaders: {
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization-User': this.store.getItem('ACCESS_TOKEN') || 'no_token',
      },
      // withCredentials: true, // same origin not use
    });
    return next.handle(request).pipe((res) => {
      if (res instanceof HttpResponse) {
        this.helper.successHelper(res);
      }
      return res;
    }, (err) => {
      if (err instanceof HttpErrorResponse) {
        this.helper.errorHelper(err);
      }
      return err;
    }, finalize(() => {
      //
    }));
  }
}
