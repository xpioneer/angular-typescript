
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BankListService } from './banklist.service';

@Component({
  selector: 'app-bank-list',
  templateUrl: './banklist.html',
})
export class BankListComponent implements OnInit {

  _current = 1;
  _pageSize = 10;
  _total = 1;
  _dataSet:any = [];
  _loading = true;

  valselect = {
    bankName: '',
    status: ''
  };
  options: Array<object>;

  constructor(
    private router: Router,
    private bankListService: BankListService
    ) {
  }

  ngOnInit() {
    this.options = [{id:0, name:'未生效'},{id:1, name:'有效'}];
    this.query();
  }

  query() {
    this._loading = true;
    this.bankListService.getBankList(this.valselect).subscribe((res:any) => {
      if(res.success){
        this._dataSet = res.data;
        this._current = res.data.pageNo;
        this._total = res.data.totalCount;
      }
      this._loading = false;
    }, e => {
      this._loading = false;
    });
  }

  clear() {
    this.valselect = {
      bankName: '',
      status: null
    };
  }

}

