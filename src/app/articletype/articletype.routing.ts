import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { ArticleTypeComponent } from './articletype.component';
import { ArticleTypeListComponent } from './articletypelist/articletypelist';
import { AddArticleTypeComponent } from './addarticletype/addarticletype';
// import { EditBankComponent } from './editbank/editbank.component';

const routes: Routes = [
    {
        path: '',
        component: ArticleTypeComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: ArticleTypeListComponent },
            { path: 'add', component: AddArticleTypeComponent },
            // { path: 'edit/:id', component: EditBankComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArticleTypeRouting{};
