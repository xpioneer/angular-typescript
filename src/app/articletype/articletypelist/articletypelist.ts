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

    valselect = {}

    options: Array<object>;

    constructor(
        private router: Router,
        private articleListService: ArticleTypeListService
    ) {
    }

    ngOnInit() {
        this.options = [{id:0, name:'未生效'},{id:1, name:'有效'}];
        this.clear();
        this.query();
    }

    query() {
        this._loading = true;
        this.valselect['current_page'] = this.current_page;
        this.valselect['per_page'] = this.per_page;
        console.log(this.valselect)
        this.articleListService.getArticleTypeList(this.valselect).subscribe((res:any) => {
            this.dataSet = res.data;
            this.current_page = res.meta.current_page;
            this.total = res.meta.total;
            this._loading = false;
        }, e => {
            this._loading = false;
        });
    }

    clear() {
        this.valselect = {
            title: {
                val: '',
                exp: 'like'
            },
            abstract: {
                val: '',
                exp: 'like'
            }
        };
    }

}

