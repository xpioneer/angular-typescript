import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl
} from '@angular/forms';

import { CardListService } from './cardlist.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './cardlist.html'
})
export class CardListComponent implements OnInit {
  // init data
  statusOptions: Array<object>;
  levelOptions: Array<object>;
  currencyOptions: Array<object>;
  feeOptions: Array<object>;
  categoryOptions: Array<object>;
  bankAjaxList:Array<object> = [];

  _current = 1;
  _pageSize = 10;
  _total = 1;
  _dataSet:any = [];
  _loading = true;

  valselect = {
    creditCardName: '',
    bankId: '',
    level: '',
    classifyId: '',
    currency: '',
    annualFee: '',
    status: ''
  };
  options:any = [];

  constructor(
    private fb: FormBuilder,
    private cardListService: CardListService
    ) {
  }

  ngOnInit() {
    this.statusOptions = [{id:0, name:'未生效'},{id:1, name:'有效'}];
    this.levelOptions = [{id:0, name: '普通'},{id:1, name: '金卡'},{id:2, name: '白金卡'}];
    this.currencyOptions = [{id:0, name:'CNY'},{id:1, name:'多币种'}];
    this.feeOptions = [{id:0, name:'免首年，交易免年费'},{id:1, name:'终身免年费'},{id:2, name: '有年费'}];
    this.categoryOptions = [{id:0, name:'车主卡'},{id:1, name:'商旅卡'},{id:2, name: '网购卡'},{id:3, name:'超市卡'},{id:4, name:'女性卡'},{id:5, name:'小白卡'}];
    this.query();
    this.searchChange()
  }

  query() {
    this.valselect['pageNo'] = this._current;
    this.valselect['pageSize'] = this._pageSize;
    this._loading = true;
    this.cardListService.getCardList(this.valselect).subscribe((res: any) => {
      if(res.success){
        this._dataSet = res.data.list;
        this._current = res.data.pageNo;
        this._total = res.data.totalCount;
      }
      this._loading = false;
    }, err => {
      this._loading = false;
    });
  }

  searchChange() {
    this.cardListService.getBankList().subscribe((res: any)=>{
      if(res.success){
        this.bankAjaxList = res.data;
      }
    },err=>{
      // this.notification.success('错误', err.msg);
    })
  }

  clear() {
    this.valselect = {
      creditCardName: '',
      bankId: null,
      level: null,
      classifyId: null,
      currency: null,
      annualFee: null,
      status: null
    };
  }
}

