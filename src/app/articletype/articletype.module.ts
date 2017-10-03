import { CommonModule }  from '@angular/common';
import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AddArticleTypeComponent }  from './addarticletype/addarticletype';
import { AddArticleTypeService }  from './addarticletype/addarticletype.service';
import { ArticleTypeComponent }     from './articletype.component';
import { ArticleTypeRouting }       from './articletype.routing';
import { ArticleTypeListComponent } from './articletypelist/articletypelist';
import { ArticleTypeListService } from './articletypelist/articletypelist.service';
import { EditArticleTypeComponent }  from './editarticletype/editarticletype';
import { EditArticleTypeService }  from './editarticletype/editarticletype.service';
// import { UploadFileModule } from '../../components/upload-file/upload-file.module';

@NgModule({
    imports: [
        FormsModule, ReactiveFormsModule,
        CommonModule,
        ArticleTypeRouting,
        NgZorroAntdModule.forRoot(),
        // UploadFileModule
    ],
    declarations: [
        ArticleTypeComponent,
        ArticleTypeListComponent,
        AddArticleTypeComponent,
        EditArticleTypeComponent,
    ],
    providers: [
        ArticleTypeListService,
        AddArticleTypeService,
        EditArticleTypeService,
    ],
})
export class ArticleTypeModule {}
