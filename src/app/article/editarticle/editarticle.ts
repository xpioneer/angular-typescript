import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';
import { ArticleModel } from '../model/article.model';
import { EditArticleService } from './editarticle.service';

@Component({
    selector: 'app-edit-aritcle',
    templateUrl: './editarticle.html',
    styles: [``]
})
export class EditArticleComponent implements OnInit {
    isConfirmLoading = false;
    mainModel:ArticleModel = new ArticleModel();
    @ViewChild('form') private form: NgForm;

    tagList:Array<object> = [];
    _tagList:Array<object> = [];
    checkedTag = {};
    typeAjaxList: Array<any> = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private editArticleService: EditArticleService,
        private notification: NzNotificationService
    ) { }

    ngOnInit() {
        let id = this.route.params['value']['id'];
        if(id) {
          this.getData(id);
        }
        this.getTypeList();
        this.getTagList();
    }

    getData(id: string) {
        this.editArticleService.getArticle(id).subscribe((res: any)=>{
            this.mainModel = res.data;
            res.data.tag.split(',').forEach((v:string) => {
                this.checkedTag[v] = true;
            });
        },(err: any)=>{
            // 
        });
    }

    getPics(url: string) {
        return !!url ? url + '?Authorization-User=' + localStorage.getItem('ACCESS_TOKEN') : '';
    }

    save(){
        for (const i in this.form.controls) {
            this.form.controls[ i ].markAsDirty();
        }
        this.mainModel.tag = this.getCheckedTag();
        if(this.form.valid){
            this.isConfirmLoading = true;
            this.editArticleService.updateArticle(this.mainModel)
                .finally(()=>this.isConfirmLoading = false)
                .subscribe((res: any)=>{
                    this.router.navigate(['/article']);
                }, (err: any)=>{
                });
        }
    }

    getTypeList(){
        this.editArticleService.getTypes().subscribe((res: any)=>{
            this.typeAjaxList = res.data;
        }, (err:any)=>{
            // 
        });
    }

    getTagList(){
        this.editArticleService.getTags().subscribe((res: any)=>{
            this.tagList = res.data;
        }, (err:any)=>{
            // 
        });
    }

    getCheckedTag(){
        return this.tagList.filter(t => {
            return this.checkedTag[t['name']];
        }).map(t => {
            return t['name']
        }).join(',');
    }

    back() {
      this.router.navigate(['article']);
    }

}
