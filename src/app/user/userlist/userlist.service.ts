import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Params } from '../../../utils/params.service'

@Injectable()
export class UserListService {
  constructor(
    private http: HttpClient,
    private params: Params
  ){}

  getUserList(data: any) {
    return this.http.get('/user?' + this.params.fmtpages(data));
  }

  deleteUser(id: string) {
    return this.http.delete('/user/' + id);
  }

}