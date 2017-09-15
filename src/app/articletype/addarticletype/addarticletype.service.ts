import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Params } from '../../../utils/params.service';

@Injectable()
export class AddArticleTypeService {
    constructor(
        private http: HttpClient,
        private params: Params
    ){}

    addArticleType(data: any) {
        return this.http.post('/api/articletype', data);
    }

}