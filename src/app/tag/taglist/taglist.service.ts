import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Params } from '../../../utils/params.service'

@Injectable()
export class TagListService {
  constructor(
    private http: HttpClient,
    private params: Params
  ){}

  getTagList(data: any) {
    return this.http.get('/tag?' + this.params.fmtpages(data));
  }

}