import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
    DomSanitizer,
    SafeHtml,
    SafeUrl,
    SafeStyle
} from '@angular/platform-browser';

interface TableColumn {
    title: string;
    key: string;
    render: Function;
}

@Component({
    selector: 'app-table',
    templateUrl: './table-pager.component.html',
    styleUrls: []
})
export class TablePagerComponent implements OnInit {

    constructor(
        // public router: Router
        private sanitizer: DomSanitizer
    ) {
        // this.router.events.subscribe((val) => {
        //     if (val instanceof NavigationEnd && window.innerWidth <= 992) {
        //         this.toggleSidebar();
        //     }
        // });
    }

    @Input() tableColumn: Array<TableColumn>;
    @Input() tableData: Array<any>;

    @Output() pageChanged:EventEmitter<Object> = new EventEmitter();

    ngOnInit() {
        console.log(this.tableColumn, this.tableData);
    }

    pageChange(event: any):void {
        this.pageChanged.emit(event);
    }

    insertHtml(_html: string) {
        return this.sanitizer.bypassSecurityTrustHtml(_html);
    }

    // toggleSidebar() {
    //     const dom: any = document.querySelector('body');
    //     dom.classList.toggle('push-right');
    // }

    // rltAndLtr() {
    //     const dom: any = document.querySelector('body');
    //     dom.classList.toggle('rtl');
    // }

    // onLoggedout() {
    //     localStorage.removeItem('isLoggedin');
    // }

    // changeLang(language: string) {
    //     // this.translate.use(language);
    // }
}
