import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService }   from '../../../utils/auth/auth.service';

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
        private authService: AuthService
    ) {
        this.store = localStorage;
    }

    ngOnInit() {
        this.userInfo = JSON.parse(this.store.getItem('USER_INFO')) || {};
    }

    logout(){
        this.authService.logout();
    }
}
