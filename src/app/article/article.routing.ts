import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { ArticleComponent } from './article.component';
import { ArticleListComponent } from './articlelist/articlelist';
import { AddArticleComponent } from './addarticle/addarticle';
// import { EditBankComponent } from './editbank/editbank.component';

const routes: Routes = [
    {
        path: '',
        component: ArticleComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: ArticleListComponent },
            { path: 'add', component: AddArticleComponent },
            // { path: 'edit/:id', component: EditBankComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArticleRouting{};
