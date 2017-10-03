import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-demos',
    templateUrl: './demos.html'
})
export class DemosComponent {
    // @ViewChild('form') private form: NgForm;

    status: number;

    constructor(
        private http: HttpClient
    ) {
    }

    ngOnInit() {
        // 
    }

    testStatus() {
        this.http.post('/test/status/'+this.status, {}).subscribe(res=>{
            console.log(res);
        }, err => {
            console.log(err);
        });
    }

  
}
