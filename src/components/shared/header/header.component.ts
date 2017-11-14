import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService }   from '../../../utils/auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls : ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
    public store: any;
    public userInfo: object = {};

    constructor (private authService: AuthService) {
        this.store = localStorage;
    }

    public ngOnInit () {
        this.userInfo = JSON.parse(this.store.getItem('USER_INFO')) || {};
    }

    public logout () {
        this.authService.logout();
    }
}
