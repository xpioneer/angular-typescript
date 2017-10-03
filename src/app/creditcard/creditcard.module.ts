import { CommonModule }  from '@angular/common';
import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { UploadFileModule } from '../../components/upload-file/upload-file.module';
import { AddCardomponent }  from './addcard/addcard';
import { AddCardService }  from './addcard/addcard.service';
import { CardListComponent } from './cardlist/cardlist';
import { CardListService } from './cardlist/cardlist.service';
import { CreditCardComponent }         from './creditcard.component';
import { CreditCardRouting }       from './creditcard.routing';
import { EditCreditomponent }  from './editcard/editcard';
import { EditCardService }  from './editcard/editcard.service';

@NgModule({
    imports: [
        FormsModule, ReactiveFormsModule,
        CommonModule,
        CreditCardRouting,
        NgZorroAntdModule.forRoot(),
        UploadFileModule,
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
    ],
})
export class CreditCardModule {}
