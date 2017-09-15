import { Component, OnInit } from '@angular/core';
import { TagListService } from './taglist.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './taglist.html',
})
export class TagListComponent implements OnInit {

  current_page = 1;
  per_page = 10;
  total = 1;
  dataSet:any = [];
  _loading = true;

  value = {};

  constructor(
    private tagListService: TagListService
    ) {
  }

  ngOnInit() {
    this.clear();
    this.query();
  }

  query() {
    this.value['current_page'] = this.current_page;
    this.value['per_page'] = this.per_page;
    this._loading = true;
    this.tagListService.getTagList(this.value).subscribe((res: any) => {
      this._loading = false;
      this.dataSet = res.data;
      this.current_page = res.meta.current_page;
      this.total = res.meta.total;
    }, (err: any)=>{
      this._loading = false;
    });
  }

  clear() {
    this.value = {
      name: {
          val: '',
          exp: 'like'
      },
      remark: {
          val: '',
          exp: 'like'
      },
      created_at: {
          val: '',
          exp: 'between'
      }
    };
  }
}

