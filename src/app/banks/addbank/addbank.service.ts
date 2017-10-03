import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AddBankService {
  constructor (
    private http: HttpClient,
  ) {}

  public insertBank (data: any) {
    return this.http.post('/api/creditCardBank/add', data);
  }

  public getCityList () {
    return this.http.get('/api/creditCardBank/addressList');
  }

}
