import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AddUserService {
  constructor(
    private http: HttpClient
  ){}

  addUser(data: any){
    return this.http.post('/user', data);
  }

}