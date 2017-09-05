import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Params } from '../../../utils/params.service';

@Injectable()
export class CardListService {
  constructor(
    private http: HttpClient,
    private params: Params
  ){}

  getCardList(data: any) {
    return this.http.get('/api/creditCard/list?' + this.params.format(data));
  }

  getBankList() {
    return this.http.get('/api/creditCardBank/list');
  }

}