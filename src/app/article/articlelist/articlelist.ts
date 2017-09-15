import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleListService } from './articlelist.service';
import { ArticleModel } from '../model/article.model';

@Component({
    selector: 'app-article-list',
    templateUrl: './articlelist.html',
})
export class ArticleListComponent implements OnInit {

    current_page = 1;
    per_page = 10;
    total = 1;
    dataSet:Array<ArticleModel> = [];
    _loading = true;

    valselect = {}

    options: Array<object>;

    constructor(
        private router: Router,
        private articleListService: ArticleListService
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
        this.articleListService.getArticleList(this.valselect).subscribe((res:any) => {
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

