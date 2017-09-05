import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DashBoardService {
  constructor(
    private http: Http
  ){}

  getTest(): Observable<any>{
    return this.http.get('/api/test/page').map((response: Response) => response.json());
  }

}