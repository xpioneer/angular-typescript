import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';

@Injectable()
export class EditCardService {
  constructor(
    private http: HttpClient
  ){}

  updateCard(data: any){
    return this.http.put('/api/creditCard/edit', data);
  }

  getBankList() {
    return this.http.get('/api/creditCardBank/list');
  }

  getCard(id: any) {
    return this.http.get(`/api/creditCard/${id}`);
  }

}