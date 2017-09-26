import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleTypeListService } from './articletypelist.service';
import { ArticleTypeModel } from '../model/articletype.model';

@Component({
    selector: 'app-article-list',
    templateUrl: './articletypelist.html',
})
export class ArticleTypeListComponent implements OnInit {

    current_page = 1;
    per_page = 10;
    total = 1;
    dataSet:Array<ArticleTypeModel> = [];
    _loading = true;

    value = {};
    _startDate = '';
    __endDate = '';

    options: Array<object>;

    constructor(
        private router: Router,
        private articleListService: ArticleTypeListService
    ) {
    }

    ngOnInit() {
        this.clear();
        this.query();
    }

    query() {
        this._loading = true;
        this.value['current_page'] = this.current_page;
        this.value['per_page'] = this.per_page;
        this.articleListService.getArticleTypeList(this.value).subscribe((res:any) => {
            this.dataSet = res.data;
            this.current_page = res.meta.current_page;
            this.total = res.meta.total;
            this._loading = false;
        }, e => {
            this._loading = false;
        });
    }

    clear() {
        this.value = {
            type_name: {
                val: '',
                exp: 'like'
            },
            remark: {
                val: '',
                exp: 'like'
            },
            created_at: {
                val: '',
                exp: 'between'
            }
        };
    }

    _startValueChange(){
        console.log(this._startDate, this.__endDate)
        this.__endDate = this._startDate;
    }

}
