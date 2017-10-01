import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleListService } from './articlelist.service';
import { ArticleModel } from '../model/article.model';
import { NzModalService } from 'ng-zorro-antd';

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

    value = {};
    isVisible = false;
    isConfirmLoading = false;
    deleteId: string;

    options: Array<object>;

    constructor(
        private router: Router,
        private modalService: NzModalService,
        private articleListService: ArticleListService
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
        this.articleListService.getArticleList(this.value).subscribe((res:any) => {
            this.dataSet = res.data;
            this.current_page = res.meta.current_page;
            this.total = res.meta.total;
            this._loading = false;
        }, e => {
            this._loading = false;
        }, ()=>{ });
    }

    clear() {
        this.value = {
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

    delArticle (id: string) {
        let that = this;
        this.modalService.confirm({
            title  : '确认是否删除',
            content: '<b>删除后将无法找回这篇文章</b>',
            showConfirmLoading: true,
            onOk() {
                return new Promise((resolve) => {
                    that.articleListService.deleteArticle(id)
                        .finally(()=>{ resolve() })
                        .subscribe((res: any) => { that.query() }, err=>{ });
                });
            },
            onCancel() { }
        });
    }


    getPics(url: string) {
        return url + '?Authorization-User=' + localStorage.getItem('ACCESS_TOKEN');
    }

}

