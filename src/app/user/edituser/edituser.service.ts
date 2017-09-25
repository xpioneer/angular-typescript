import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class EditUserService {
  constructor(
    private http: HttpClient
  ){}

  getUser(id: any) {
    return this.http.get(`/user/${id}`);
  }

  updateUser(data: any) {
    return this.http.put(`/user/${data.id}`, data);
  }

}