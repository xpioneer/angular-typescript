import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class EditMerchantService {
  constructor(
    private http: HttpClient
  ){}

  getMerchant(id: any) {
    return this.http.get(`/api/creditCardMerchant/${id}`);
  }

  updateMerchant(data: any) {
    return this.http.put(`/api/creditCardMerchant/edit`, data);
  }

}