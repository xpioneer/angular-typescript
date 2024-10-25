import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Params } from '../../../utils/params.service';

@Injectable()
export class DemosService {
  constructor (
    private http: HttpClient,
  ) {}

  testStatus (params: HttpParams) {
    return this.http.get('/article', {params});
  }

  testApi (url: string, data: any) {
    return this.http.get(url, {params: data});
  }

}
