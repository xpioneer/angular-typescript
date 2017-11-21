import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { NzNotificationService } from 'ng-zorro-antd';
import { UrlModel } from './models/demo.model';
import { Params } from '../../utils/params.service';

@Component({
    selector: 'app-demos',
    templateUrl: './demos.html',
})
export class DemosComponent {
    // @ViewChild('form') private form: NgForm;

    public status: number;
    public urlObj: UrlModel = new UrlModel();
    public jsonData: string;

    constructor (
        private http: HttpClient,
        private params: Params,
        private notificationService: NzNotificationService,
    ) {
    }

    public ngOnInit () {
        //
    }

    public testStatus () {
        if (!(this.status >= 200 && this.status < 600)) {
            this.notificationService.warning('警告', '请输入正确格式的状态码');
            return;
        }
        this.http.post('/test/status/' + this.status, {}).subscribe((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
    }

    public testUrl () {
        if (!this.urlObj.url || (this.urlObj.url && this.urlObj.url.indexOf('/') !== 0)) {
            this.notificationService.warning('警告', '请输入正确格式的url');
            return;
        }
        this.requestUrl().subscribe((res) => {
            this.jsonData = JSON.stringify(res, null, '    ');
        }, (err) => {
            console.log(err);
        });
    }

    private requestUrl () {
        let request: Observable<object>;
        switch (this.urlObj.method) {
            case 'POST':
                request = this.http.post(this.urlObj.url, this.urlObj.params);
                break;
            case 'PUT':
                request = this.http.put(this.urlObj.url, this.urlObj.params);
                break;
            case 'DELET':
                request = this.http.delete(this.urlObj.url);
                break;
            default:
                request = this.http.get(`${this.urlObj.url}?${this.params.fmtpages(this.urlObj.params)}`);
                break;
        }
        return request;
    }

}
