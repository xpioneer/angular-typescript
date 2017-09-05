import { Component, OnInit } from '@angular/core';
import { MerchantListService } from './merchantlist.service';

@Component({
  selector: 'app-merchant-list',
  templateUrl: './merchantlist.html',
})
export class MerchantListComponent implements OnInit {

  _current = 1;
  _pageSize = 10;
  _total = 1;
  _dataSet:any = [];
  _loading = true;

  valselect = {
    merchantName: '',
    merchantType: '',
    business: '',
    status: ''
  };
  statusList: Array<object>;
  merchantTypeList: Array<object>;

  constructor(
    private merchantListService: MerchantListService
    ) {
  }

  ngOnInit() {
    this.statusList = [{id:0, name:'未生效'},{id:1, name:'有效'}];
    this.merchantTypeList = [{id:0, name:'银行'},{id:1, name:'一级代理'},{id:2, name:'二级代理'},{id:3, name:'三级代理'}];
    this.query();
  }

  query() {
    this.valselect['pageNo'] = this._current;
    this.valselect['pageSize'] = this._pageSize;
    this._loading = true;
    this.merchantListService.getMerchantList(this.valselect).subscribe((res: any) => {
      this._loading = false;
      this._dataSet = res.data.list;
      this._current = res.data.pageNo;
      this._total = res.data.totalCount;
    }, (err: any)=>{
      this._loading = false;
    });
  }

  clear() {
    this.valselect = {
      merchantName: '',
      merchantType: null,
      business: '',
      status: null
    };
  }
}

