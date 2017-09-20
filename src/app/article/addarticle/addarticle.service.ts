import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Params } from '../../../utils/params.service';

@Injectable()
export class AddArticleService {
  constructor(
    private http: HttpClient,
    private params: Params
  ){}

  insertArticle(data: any) {
    return this.http.post('/article', data);
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