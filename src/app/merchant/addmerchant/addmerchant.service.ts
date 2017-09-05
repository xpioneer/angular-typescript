import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AddMerchantService {
  constructor(
    private http: HttpClient
  ){}

  insertMerchant(data: any){
    return this.http.post('/api/creditCardMerchant/add', data);
  }

}