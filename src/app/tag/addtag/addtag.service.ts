import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AddTagService {
  constructor(
    private http: HttpClient
  ){}

  addTag(data: any){
    return this.http.post('/tag', data);
  }

}