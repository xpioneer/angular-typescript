import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TagRouting }       from './tag.routing';
import { TagComponent } from './tag.component';
import { TagListComponent } from './taglist/taglist';
import { AddTagComponent } from './addtag/addtag';
import { EditTagComponent } from './edittag/edittag';
import { TagListService } from './taglist/taglist.service';
import { AddTagService }  from './addtag/addtag.service';
import { EditTagService }  from './edittag/edittag.service';

@NgModule({
    imports: [
        FormsModule, ReactiveFormsModule,
        CommonModule,
        TagRouting,
        NgZorroAntdModule.forRoot()
    ],
    declarations: [
        TagComponent,
        TagListComponent,
        AddTagComponent,
        EditTagComponent,
    ],
    providers: [
        TagListService,
        AddTagService,
        EditTagService,
    ]
})
export class TagModule {}
