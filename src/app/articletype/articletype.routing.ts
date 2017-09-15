import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { ArticleTypeComponent } from './articletype.component';
import { ArticleTypeListComponent } from './articletypelist/articletypelist';
import { AddArticleTypeComponent } from './addarticletype/addarticletype';
import { EditArticleTypeComponent } from './editarticletype/editarticletype';

const routes: Routes = [
    {
        path: '',
        component: ArticleTypeComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: ArticleTypeListComponent },
            { path: 'add', component: AddArticleTypeComponent },
            { path: 'edit/:id', component: EditArticleTypeComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArticleTypeRouting{};
