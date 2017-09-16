import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ArticleRouting }       from './article.routing';
import { ArticleComponent }         from './article.component';
import { ArticleListComponent } from './articlelist/articlelist';
import { ArticleListService } from './articlelist/articlelist.service';
import { AddArticleComponent }  from './addarticle/addarticle';
import { AddArticleService }  from './addarticle/addarticle.service';
import { EditArticleComponent }  from './editarticle/editarticle';
import { EditArticleService }  from './editarticle/editarticle.service';
import { UploadFileModule } from '../../components/upload-file/upload-file.module';
import { EditorModule } from '../../components/editor/editor.module';

@NgModule({
    imports: [
        FormsModule, ReactiveFormsModule,
        CommonModule,
        ArticleRouting,
        NgZorroAntdModule.forRoot(),
        UploadFileModule,
        EditorModule
    ],
    declarations: [
        ArticleComponent,
        ArticleListComponent,
        AddArticleComponent,
        EditArticleComponent
    ],
    providers: [
        ArticleListService,
        AddArticleService,
        EditArticleService,
    ]
})
export class ArticleModule {}
