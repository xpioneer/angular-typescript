import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DashBoardService {
  constructor (
    private http: HttpClient,
  ) {}

  public getTest (): Observable<any> {
    return this.http.get('/api/test/page');
  }

}
