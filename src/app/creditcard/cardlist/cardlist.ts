import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';

import { CardListService } from './cardlist.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './cardlist.html',
})
export class CardListComponent implements OnInit {
  // init data
  public statusOptions: object[];
  public levelOptions: object[];
  public currencyOptions: object[];
  public feeOptions: object[];
  public categoryOptions: object[];
  public bankAjaxList: object[] = [];

  public _current = 1;
  public _pageSize = 10;
  public _total = 1;
  public _dataSet: any = [];
  public _loading = true;

  public valselect: any = {
    creditCardName: '',
    bankId: '',
    level: '',
    classifyId: '',
    currency: '',
    annualFee: '',
    status: '',
  };
  public options: any = [];

  constructor (
    private fb: FormBuilder,
    private cardListService: CardListService,
    ) {
  }

  public ngOnInit () {
    this.statusOptions = [{id: 0, name: '未生效'}, {id: 1, name: '有效'}];
    this.levelOptions = [{id: 0, name: '普通'}, {id: 1, name: '金卡'}, {id: 2, name: '白金卡'}];
    this.currencyOptions = [{id: 0, name: 'CNY'}, {id: 1, name: '多币种'}];
    this.feeOptions = [{id: 0, name: '免首年，交易免年费'}, {id: 1, name: '终身免年费'}, {id: 2, name: '有年费'}];
    this.categoryOptions = [{id: 0, name: '车主卡'}, {id: 1, name: '商旅卡'}, {id: 2, name: '网购卡'}, {id: 3, name: '超市卡'}, {id: 4, name: '女性卡'}, {id: 5, name: '小白卡'}];
    this.query();
    this.searchChange();
  }

  public query () {
    this.valselect.pageNo = this._current;
    this.valselect.pageSize = this._pageSize;
    this._loading = true;
    this.cardListService.getCardList(this.valselect).subscribe((res: any) => {
        if (res.success) {
        this._dataSet = res.data.list;
        this._current = res.data.pageNo;
        this._total = res.data.totalCount;
        }
        this._loading = false;
    }, (err) => {
        this._loading = false;
    });
  }

  public searchChange () {
    this.cardListService.getBankList().subscribe((res: any) => {
        if (res.success) {
        this.bankAjaxList = res.data;
        }
    }, (err) => {
        // this.notification.success('错误', err.msg);
    });
  }

  public clear () {
    this.valselect = {
        creditCardName: '',
        bankId: null,
        level: null,
        classifyId: null,
        currency: null,
        annualFee: null,
        status: null,
    };
  }
}
