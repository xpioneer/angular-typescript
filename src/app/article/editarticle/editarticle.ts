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
    @ViewChild('editor') private editor: ElementRef;

    quillEditor:any = {};
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
        console.log(this.route, this.router)
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

    save(){
        for (const i in this.form.controls) {
            this.form.controls[ i ].markAsDirty();
        }
        this.mainModel.tag = this.getCheckedTag();
        if(this.form.valid){
            this.isConfirmLoading = true;
            this.editArticleService.updateArticle(this.mainModel).subscribe((res: any)=>{
                this.isConfirmLoading = false;
                this.notification.success('成功', res.msg);
                this.router.navigate(['/article']);
            }, (err: any)=>{
                this.isConfirmLoading = false;
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
