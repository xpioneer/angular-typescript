import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class EditTagService {
  constructor(
    private http: HttpClient
  ){}

  getTag(id: any) {
    return this.http.get(`/tag/${id}`);
  }

  updateTag(data: any) {
    return this.http.put(`/tag/${data.id}`, data);
  }

}