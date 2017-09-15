import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';
import { ArticleTypeModel } from '../model/articletype.model';
import { EditArticleTypeService } from './editarticletype.service';

@Component({
  selector: 'app-edit-articletype',
  templateUrl: './editarticletype.html',
  styles: []
})
export class EditArticleTypeComponent implements OnInit {
    isConfirmLoading = false;
    editArticleType:ArticleTypeModel = new ArticleTypeModel();
    @ViewChild('form') private form: NgForm;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private editArticleTypeService: EditArticleTypeService,
        private notification: NzNotificationService
    ) { }

    ngOnInit() {
        let id = this.route.params['value']['id'];
        if(id){
            this.getData(id);
        }
    }

    getData(id: string){
        this.editArticleTypeService.getArticleType(id).subscribe((res: any) => {
            this.editArticleType = res.data;
        }, err=>{
            // 
        });
    }

    save(){
        for (const i in this.form.controls) {
            this.form.controls[ i ].markAsDirty();
        }
        if(this.form.valid){
            this.isConfirmLoading = true;
            this.editArticleTypeService.updateArticleType(this.editArticleType).subscribe((res: any)=>{
                this.isConfirmLoading = false;
                this.notification.success('成功', res.msg);
                // this.router.navigate(['/banks']);
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
