import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Params } from '../../../utils/params.service';

@Injectable()
export class EditArticleTypeService {
  constructor(
    private http: HttpClient,
    private params: Params
  ){}

  getArticleType(id: string) {
    return this.http.get('/api/articletype/'+id);
  }

  updateArticleType(data: any) {
    return this.http.put('/api/articletype/'+data.id, data);
  }

}