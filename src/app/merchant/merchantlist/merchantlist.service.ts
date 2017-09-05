import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Params } from '../../../utils/params.service'

@Injectable()
export class MerchantListService {
  constructor(
    private http: HttpClient,
    private params: Params
  ){}

  getMerchantList(data: any) {
    return this.http.get('/api/creditCardMerchant/list?' + this.params.format(data));
  }

}