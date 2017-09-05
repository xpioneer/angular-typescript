import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class EditBankService {
  constructor(
    private http: HttpClient
  ){}

  getBank(id: string) {
    return this.http.get(`/api/creditCardBank/${id}`);
  }

  updateBank(data: any){
    return this.http.put('/api/creditCardBank/edit', data);
  }

  getCityList() {
    return this.http.get('/api/creditCardBank/addressList');
  }

}