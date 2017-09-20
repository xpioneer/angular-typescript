import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Params } from '../../../utils/params.service';

@Injectable()
export class EditArticleService {
  constructor(
    private http: HttpClient,
    private params: Params
  ){}

  getArticle(id: string) {
    return this.http.get('/article/' + id);
  }

  updateArticle(data: any) {
    return this.http.put('/article/'+data.id, data);
  }

  getTags() {
    return this.http.get('/tag?' + this.params.format({
        current_page: 1,
        per_page: 999
    }));
  }


  getTypes() {
    return this.http.get('/articletype?' + this.params.format({
        current_page: 1,
        per_page: 999
    }));
  }

}