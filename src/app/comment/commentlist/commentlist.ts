import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { CommentModel } from '../model/comment.model';
import { CommentListService } from './commentlist.service';

@Component({
    selector: 'app-comment-list',
    templateUrl: './commentlist.html',
})
export class CommentListComponent implements OnInit {
    @ViewChild('form') private form: NgForm;
    private timer: number = 0;
    public current_page = 1;
    public per_page = 10;
    public total = 1;
    public dataSet: CommentModel[] = [];
    public _loading = true;

    public value: any = {};
    public isVisible = false;
    public isConfirmLoading = false;
    public deleteId: string;

    public options: object[];

    constructor (
        private router: Router,
        private modalService: NzModalService,
        private commentListService: CommentListService,
    ) {
    }

    public ngOnInit () {
        this.clear();
        this.query(undefined);
    }

    public query (cur_page: number) {
        if (cur_page) {
            this.current_page = 1;
        }
        this.value.current_page = this.current_page;
        this.value.per_page = this.per_page;
        this._loading = true;
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
            this.commentListService.getCommentList(this.value)
            .finally(() => { this._loading = false; })
            .subscribe((res: any) => {
                this.dataSet = res.data;
                this.total = res.meta.total;
            }, (e) => { });
        });
    }

    public clear () {
        this.value = {
            ip: {
                val: '',
                exp: 'like',
            },
            content: {
                val: '',
                exp: 'like',
            },
            client: {
                val: '',
                exp: 'like',
            },
            created_at: {
                val: '',
                exp: 'between',
            },
            article_title: {
                val: '',
                exp: 'like',
            },
        };
    }

    public delSystemLog (id: string) {
        const that = this;
        this.modalService.confirm({
            title  : '确认是否删除',
            content: '<b>删除后将无法找回这条日志</b>',
            showConfirmLoading: true,
            onOk () {
                return new Promise((resolve) => {
                    that.commentListService.deleteComment(id)
                        .finally(() => { resolve(); })
                        .subscribe((res: any) => { that.query(undefined); }, (err: any) => { });
                });
            },
            onCancel () { },
        });
    }

    public ngDoDestory () {
        clearTimeout(this.timer);
    }

}
