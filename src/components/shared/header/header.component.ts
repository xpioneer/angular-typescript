import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls :['./header.component.less']

})
export class HeaderComponent implements OnInit {
    store: any;
    userInfo: object = {};

    constructor(
        private http: HttpClient,
        private notification: NzNotificationService
    ) {
        this.store = localStorage;
    }

    ngOnInit() {
        this.userInfo = JSON.parse(this.store.getItem('USER_INFO')) || {};
    }

    logout(){
        this.http.post('/logout', {}).subscribe((res:any)=>{
            this.store.clear();
            location.href = '/#/login';
        }, (err:any)=>{
            this.notification.error('错误', err.error.msg);
        });
    }
}
