import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CreditCardRouting }       from './creditcard.routing';
import { CreditCardComponent }         from './creditcard.component';
import { CardListComponent } from './cardlist/cardlist';
import { CardListService } from './cardlist/cardlist.service';
import { AddCardomponent }  from './addcard/addcard';
import { AddCardService }  from './addcard/addcard.service';
import { EditCreditomponent }  from './editcard/editcard';
import { EditCardService }  from './editcard/editcard.service';
import { UploadFileModule } from '../../components/upload-file/upload-file.module';

@NgModule({
    imports: [
        FormsModule, ReactiveFormsModule,
        CommonModule,
        CreditCardRouting,
        NgZorroAntdModule.forRoot(),
        UploadFileModule
    ],
    declarations: [
        CreditCardComponent,
        CardListComponent,
        AddCardomponent,
        EditCreditomponent,
    ],
    providers: [
        CardListService,
        AddCardService,
        EditCardService,
    ]
})
export class CreditCardModule {}
