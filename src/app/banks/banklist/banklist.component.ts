
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BankListService } from './banklist.service';

@Component({
  selector: 'app-bank-list',
  templateUrl: './banklist.html',
})
export class BankListComponent implements OnInit {

  public _current = 1;
  public _pageSize = 10;
  public _total = 1;
  public _dataSet: any = [];
  public _loading = true;

  public valselect = {
    bankName: '',
    status: '',
  };
  public options: object[];

  constructor (
    private router: Router,
    private bankListService: BankListService,
    ) {
  }

  public ngOnInit () {
    this.options = [{id: 0, name: '未生效'}, {id: 1, name: '有效'}];
    this.query();
  }

  public query () {
    this._loading = true;
    this.bankListService.getBankList(this.valselect).subscribe((res: any) => {
        if (res.success) {
        this._dataSet = res.data;
        this._current = res.data.pageNo;
        this._total = res.data.totalCount;
        }
        this._loading = false;
    }, (e) => {
        this._loading = false;
    });
  }

  public clear () {
    this.valselect = {
        bankName: '',
        status: null,
    };
  }

}
