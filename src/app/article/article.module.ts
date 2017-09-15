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
import { AddArticleTypeService }  from './addarticle/addarticle.service';
// import { EditBankComponent }  from './editbank/editbank.component';
// import { EditBankService }  from './editbank/editbank.service';
import { UploadFileModule } from '../../components/upload-file/upload-file.module';

@NgModule({
    imports: [
        FormsModule, ReactiveFormsModule,
        CommonModule,
        ArticleRouting,
        NgZorroAntdModule.forRoot(),
        UploadFileModule
    ],
    declarations: [
        ArticleComponent,
        ArticleListComponent,
        AddArticleComponent,
        // EditBankComponent,
    ],
    providers: [
        ArticleListService,
        AddArticleTypeService,
        // EditBankService,
    ]
})
export class ArticleModule {}
