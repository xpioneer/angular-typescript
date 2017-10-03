import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    encapsulation: ViewEncapsulation.Emulated,
    template: '<nz-root><router-outlet></router-outlet></nz-root>',
})
export class AppComponent implements OnInit {

    constructor () {
    }

    public ngOnInit () {
    }
}
