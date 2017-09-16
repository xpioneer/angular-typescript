import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { ArticleComponent } from './article.component';
import { ArticleListComponent } from './articlelist/articlelist';
import { AddArticleComponent } from './addarticle/addarticle';
import { EditArticleComponent } from './editarticle/editarticle';

const routes: Routes = [
    {
        path: '',
        component: ArticleComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: ArticleListComponent },
            { path: 'add', component: AddArticleComponent },
            { path: 'edit/:id', component: EditArticleComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArticleRouting{};
