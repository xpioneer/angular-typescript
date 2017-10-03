import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '../../../utils/params.service';

@Injectable()
export class BankListService {
  constructor (
    private http: HttpClient,
    private params: Params,
  ) {}

  public getBankList (data: any) {
    return this.http.get('/api/creditCardBank/list?' + this.params.format(data));
  }

}
