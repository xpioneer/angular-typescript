import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { SystemLogModel } from '../model/systemlog.model';
import { SystemLogListService } from './systemloglist.service';

@Component({
    selector: 'app-systemlog-list',
    templateUrl: './systemloglist.html',
})
export class SystemLogListComponent implements OnInit {
    @ViewChild('form') private form: NgForm;
    private timer: number = 0;
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
            this.systemLogListService.getSystemLogList(this.value)
            .finally(() => { this._loading = false; })
            .subscribe((res: any) => {
                this.dataSet = res.data;
                this.total = res.meta.total;
            }, (e) => { });
        });
    }

    public clear () {
        this.value = {
            request_ip: {
                val: '',
                exp: 'like',
            },
            request_method: {
                val: '',
                exp: 'like',
            },
            client_type: {
                val: '',
                exp: 'like',
            },
            status: {
                val: '',
                exp: 'in',
            },
            time: {
                val: '',
                exp: 'between',
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
                        .subscribe((res: any) => { that.query(undefined); }, (err) => { });
                });
            },
            onCancel () { },
        });
    }

    public getStatus (status: number) {
        let nzStatus = '';
        switch (status) {
            case 200:
            case 201:
                nzStatus = 'success';
                break;
            case 400:
            case 401:
            case 403:
            case 404:
            case 405:
            case 406:
                nzStatus = 'warning';
                break;
            case 500:
            case 501:
            case 502:
            case 503:
            case 504:
            case 505:
                nzStatus = 'error';
                break;

            default:
                nzStatus = 'default';
                break;
        }
        return nzStatus;
    }

    public ngDoDestory () {
        clearTimeout(this.timer);
    }

}
