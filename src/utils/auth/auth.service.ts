import { Injectable } from '@angular/core';
import { Router }     from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
    store: any;
    isLogged: boolean = false;

    constructor(
        private router: Router,
        private http: HttpClient
        ){
        this.store = localStorage;
        this.isLogged = this.store.getItem('ACCESS_TOKEN')
                        && this.store.getItem('ACCESS_TOKEN').length == 64
                        && this.store.getItem('USER_INFO') ? true : false;
    }

    get redirectUrl(){
        return sessionStorage.getItem('RedirectUrl') || '';
    }

    set redirectUrl(url: string){
        sessionStorage.setItem('RedirectUrl', url);
    }

    login(userInfo: object) {
        this.http.post('/login', userInfo).subscribe((res:any)=>{
            this.isLogged = true;
            localStorage.setItem('ACCESS_TOKEN', res.msg);
            localStorage.setItem('USER_INFO', JSON.stringify(res.data));
            this.router.navigate([!!this.redirectUrl ? this.redirectUrl : 'dashboard']);
          }, (err: any)=>{ });
    }

    logout(): void {
        this.http.post('/logout', {}).subscribe((res:any)=>{
            this.isLogged = false;
            this.store.clear();
            setTimeout(()=>{
                this.router.navigate(['login']);
            }, 1000);
        }, (err:any)=>{ });
    }
}