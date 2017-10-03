import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
    selector: 'app-demos',
    templateUrl: './demos.html',
})
export class DemosComponent {
    // @ViewChild('form') private form: NgForm;

    public status: number;

    constructor (
        private http: HttpClient,
    ) {
    }

    public ngOnInit () {
        //
    }

    public testStatus () {
        this.http.post('/test/status/' + this.status, {}).subscribe((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
    }

}
