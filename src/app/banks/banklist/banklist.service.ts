import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Params } from '../../../utils/params.service';

@Injectable()
export class BankListService {
  constructor(
    private http: HttpClient,
    private params: Params
  ){}

  getBankList(data: any) {
    return this.http.get('/api/creditCardBank/list?' + this.params.format(data));
  }

}