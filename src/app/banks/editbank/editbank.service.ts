import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EditBankService {
  constructor (
    private http: HttpClient,
  ) {}

  public getBank (id: string) {
    return this.http.get(`/api/creditCardBank/${id}`);
  }

  public updateBank (data: any) {
    return this.http.put('/api/creditCardBank/edit', data);
  }

  public getCityList () {
    return this.http.get('/api/creditCardBank/addressList');
  }

}
