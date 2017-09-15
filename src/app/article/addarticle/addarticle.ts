import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';
import { ArticleModel } from '../model/article.model';
import { AddArticleTypeService } from './addarticle.service';

@Component({
    selector: 'app-add-bank',
    templateUrl: './addarticle.html',
    styles: []
})
export class AddArticleComponent implements OnInit {
    formGroup: FormGroup;
    isConfirmLoading = false;
    addArticle:ArticleModel = new ArticleModel();
    @ViewChild('form') private form: NgForm;

    visible = {};
    options: Array<any>;
    cityLists: Array<any> = [];
    cityChecked = {};

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private addArticleTypeService: AddArticleTypeService,
        private notification: NzNotificationService
    ) { }

    ngOnInit() {
      // this.getData();
    }

    save(){
        for (const i in this.form.controls) {
            this.form.controls[ i ].markAsDirty();
        }
        if(this.form.valid){
            this.isConfirmLoading = true;
            this.addArticleTypeService.addArticle(this.addArticle).subscribe((res: any)=>{
                this.isConfirmLoading = false;
                this.notification.success('成功', res.msg);
                this.router.navigate(['/article']);
            }, (err: any)=>{
                this.notification.error('警告', err.msg);
                this.isConfirmLoading = false;
            });
        }
    }

    back() {
      this.router.navigate(['./article']);
    }

}
