import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from "rxjs";


@Injectable()
export class AppInterceptor implements HttpInterceptor {

    constructor(
      // private authService: AuthService
      ) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const request = req.clone({
          headers: req.headers.set('AuthToken', 'authService.getToken()')
      });
      return next.handle(request).map(event => {
        if (event instanceof HttpResponse) {
          if (event.status === 401) {
            // go to login
          }
        }
        return event;
      });
    }
}