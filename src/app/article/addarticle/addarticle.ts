import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';
import { ArticleModel } from '../model/article.model';
import { AddArticleService } from './addarticle.service';

@Component({
    selector: 'app-add-article',
    templateUrl: './addarticle.html',
    styles: [``]
})
export class AddArticleComponent implements OnInit {
    isConfirmLoading = false;
    addArticle:ArticleModel = new ArticleModel();
    @ViewChild('form') private form: NgForm;
    
    tagList:Array<object> = [];
    checkedTag = {};
    typeAjaxList: Array<any> = [];

    constructor(
        private router: Router,
        private addArticleService: AddArticleService,
        private notification: NzNotificationService
    ) { }

    ngOnInit() {
        this.getTypeList();
        this.getTagList();
    }

    save(){
        for (const i in this.form.controls) {
            this.form.controls[ i ].markAsDirty();
        }
        this.addArticle.tag = this.getCheckedTag();
        if(this.form.valid){
            this.isConfirmLoading = true;
            this.addArticleService.insertArticle(this.addArticle).subscribe((res: any)=>{
                this.isConfirmLoading = false;
                this.notification.success('成功', res.msg);
                this.router.navigate(['/article']);
            }, (err: any)=>{
                this.isConfirmLoading = false;
            });
        }
    }

    getTypeList(){
        this.addArticleService.getTypes().subscribe((res: any)=>{
            this.typeAjaxList = res.data;
        }, (err:any)=>{
            // 
        });
    }

    getTagList(){
        this.addArticleService.getTags().subscribe((res: any)=>{
            this.tagList = res.data;
        }, (err:any)=>{
            // 
        });
    }

    getCheckedTag(){
        let arr = [];
        for(let item of this.tagList){
            if(this.checkedTag[item['id']]){
                arr.push(item['name']);
            }
        }
        return arr.join(',');
    }

    back() {
      this.router.navigate(['article']);
    }

}
