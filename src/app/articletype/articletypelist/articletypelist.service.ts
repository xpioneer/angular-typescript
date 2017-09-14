import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Params } from '../../../utils/params.service';

@Injectable()
export class ArticleTypeListService {
  constructor(
    private http: HttpClient,
    private params: Params
  ){}

  getArticleTypeList(data: any) {
    return this.http.get('/api/articletype?' + this.params.fmtpages(data));
  }

}