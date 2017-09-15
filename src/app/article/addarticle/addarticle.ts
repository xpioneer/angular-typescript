import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';
import { ArticleModel } from '../model/article.model';
import { AddArticleTypeService } from './addarticle.service';

const Quill = require('quill');


const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': <any>[] }, { 'background': <any>[] }],          // dropdown with defaults from theme
    [{ 'font': <any>[] }],
    [{ 'align': <any>[] }],

    ['link', 'image'],

    ['clean']                                         // remove formatting button
];

@Component({
    selector: 'app-add-bank',
    templateUrl: './addarticle.html',
    styles: [`
        .ql-container{min-height:600px;}
    `]
})
export class AddArticleComponent implements OnInit {
    isConfirmLoading = false;
    addArticle:ArticleModel = new ArticleModel();
    @ViewChild('form') private form: NgForm;
    @ViewChild('editor') private editor: ElementRef;

    quillEditor = {};

    constructor(
        private router: Router,
        private addArticleTypeService: AddArticleTypeService,
        private notification: NzNotificationService
    ) { }

    ngOnInit() {
        console.log('ngOnInit', this.addArticle);
        this.quillEditor = new Quill(this.editor.nativeElement, {
            debug: false,
            modules: {
                toolbar: toolbarOptions
            },
            placeholder: '请写下你的想法...',
            readOnly: false,
            theme: 'snow'
        })
    }

    ngAfterViewInit(){
        console.log('ngAfterViewInit')
    }

    ngAfterContentInit(){
        console.log('ngAfterContentInit')
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
