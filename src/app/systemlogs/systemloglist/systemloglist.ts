import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { SystemLogModel } from '../model/systemlog.model';
import { SystemLogListService } from './systemloglist.service';

@Component({
    selector: 'app-systemlog-list',
    templateUrl: './systemloglist.html',
})
export class SystemLogListComponent implements OnInit {

    public current_page = 1;
    public per_page = 10;
    public total = 1;
    public dataSet: SystemLogModel[] = [];
    public _loading = true;

    public value: any = {};
    public isVisible = false;
    public isConfirmLoading = false;
    public deleteId: string;

    public options: object[];

    constructor (
        private router: Router,
        private modalService: NzModalService,
        private systemLogListService: SystemLogListService,
    ) {
    }

    public ngOnInit () {
        this.clear();
        this.query();
    }

    public query () {
        this._loading = true;
        this.value.current_page = this.current_page;
        this.value.per_page = this.per_page;
        this.systemLogListService.getSystemLogList(this.value).subscribe((res: any) => {
            this.dataSet = res.data;
            this.current_page = res.meta.current_page;
            this.total = res.meta.total;
            this._loading = false;
        }, (e) => {
            this._loading = false;
        }, () => { });
    }

    public clear () {
        this.value = {
            method: {
                val: '',
                exp: 'like',
            },
            request_ip: {
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
                    that.systemLogListService.deleteSystemLog(id)
                        .finally(() => { resolve(); })
                        .subscribe((res: any) => { that.query(); }, (err) => { });
                });
            },
            onCancel () { },
        });
    }

    // public getPics (url: string) {
    //     return !!url ? url + '?Authorization-User=' + localStorage.getItem('ACCESS_TOKEN') : '';
    // }

}
