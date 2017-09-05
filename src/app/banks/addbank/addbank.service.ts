import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AddBankService {
  constructor(
    private http: HttpClient
  ){}

  insertBank(data: any) {
    return this.http.post('/api/creditCardBank/add', data);
  }

  getCityList() {
    return this.http.get('/api/creditCardBank/addressList');
  }

}