import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Params } from '../../../utils/params.service';

@Injectable()
export class ArticleListService {
  constructor(
    private http: HttpClient,
    private params: Params
  ){}

  getArticleList(data: any) {
    return this.http.get('/article?' + this.params.fmtpages(data));
  }

  deleteArticle(id: string) {
      return this.http.delete('/article/' + id);
  }

}