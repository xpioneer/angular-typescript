import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';

@Injectable()
export class EditCardService {
  constructor (
    private http: HttpClient,
  ) {}

  public updateCard (data: any) {
    return this.http.put('/api/creditCard/edit', data);
  }

  public getBankList () {
    return this.http.get('/api/creditCardBank/list');
  }

  public getCard (id: any) {
    return this.http.get(`/api/creditCard/${id}`);
  }

}
