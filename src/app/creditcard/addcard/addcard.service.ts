import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';

@Injectable()
export class AddCardService {
  constructor(
    private http: HttpClient
  ){}

  insertCard(data: any){
    return this.http.post('/api/creditCard/add', data);
  }

  getBankList() {
    return this.http.get('/api/creditCardBank/list');
  }

  getCityList() {
    return this.http.get('/api/creditCardBank/addressList');
  }

}