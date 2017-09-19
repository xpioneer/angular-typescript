import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DashBoardService {
  constructor(
    private http: HttpClient
  ){}

  getTest(): Observable<any>{
    return this.http.get('/api/test/page');
  }

}