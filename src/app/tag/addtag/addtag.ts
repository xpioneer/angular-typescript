import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';
import { TagModel } from '../model/tag.model';

import { AddTagService } from './addtag.service';

@Component({
  selector: 'app-add-tag',
  templateUrl: './addtag.html',
  styles: []
})
export class AddTagComponent implements OnInit {
  isConfirmLoading = false;
  addTag: TagModel = new TagModel();
  @ViewChild('form') private form: NgForm;

  constructor(
    private router: Router,
    private addTagService: AddTagService,
    private notification: NzNotificationService
    ) {
  }

  ngOnInit() {
    // 
  }

  save(){
    for (const i in this.form.controls) {
      this.form.controls[ i ].markAsDirty();
    }
    if(this.form.valid){
      this.isConfirmLoading = true;
      this.addTagService.addTag(this.addTag).subscribe((res: any)=>{
        this.isConfirmLoading = false;
        this.notification.success('成功', res.msg);
        this.router.navigate(['/tag']);
      }, (err: any)=>{
        this.notification.error('警告', err.msg);
        this.isConfirmLoading = false;
      });
    }
  }

  back() {
    this.router.navigate(['./tag']);
  }

}

