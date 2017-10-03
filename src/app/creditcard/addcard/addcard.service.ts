import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';

@Injectable()
export class AddCardService {
  constructor (
    private http: HttpClient,
  ) {}

  public insertCard (data: any) {
    return this.http.post('/api/creditCard/add', data);
  }

  public getBankList () {
    return this.http.get('/api/creditCardBank/list');
  }

  public getCityList () {
    return this.http.get('/api/creditCardBank/addressList');
  }

}
