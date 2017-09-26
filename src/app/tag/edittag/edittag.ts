import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';
import { TagModel } from '../model/tag.model';

import { EditTagService } from './edittag.service';

@Component({
  selector: 'app-edit-tag',
  templateUrl: './edittag.html',
  styles: []
})
export class EditTagComponent implements OnInit {
  isConfirmLoading = false;
  editTag: TagModel = new TagModel();
  @ViewChild('form') private form: NgForm;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private EditTagService: EditTagService,
    private notification: NzNotificationService
    ) {
  }

  ngOnInit() {
    let id = this.route.params['value']['id'];
    if(id){
      this.getData(id);
    }
    
  }

  getData(id: any) {
    this.EditTagService.getTag(id).subscribe((res: any) => {
      this.editTag = res.data;
    });
  }

  save(){
    for (const i in this.form.controls) {
      this.form.controls[ i ].markAsDirty();
    }
    if(this.form.valid){
      this.isConfirmLoading = true;
      this.EditTagService.updateTag(this.editTag).subscribe((res: any)=>{
        this.isConfirmLoading = false;
        this.notification.success('成功', res.msg);
        this.router.navigate(['/tag']);
      }, (err: any)=>{
        this.isConfirmLoading = false;
      });
    }
  }
  
  back() {
    this.router.navigate(['./tag']);
  }

}

