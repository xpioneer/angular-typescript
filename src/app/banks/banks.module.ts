import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BanksRouting }       from './banks.routing';
import { BanksComponent }         from './banks.component';
import { BankListComponent } from './banklist/banklist.component';
import { BankListService } from './banklist/banklist.service';
import { AddBankComponent }  from './addbank/addbank.component';
import { AddBankService }  from './addbank/addbank.service';
import { EditBankComponent }  from './editbank/editbank.component';
import { EditBankService }  from './editbank/editbank.service';
import { UploadFileModule } from '../../components/upload-file/upload-file.module';

@NgModule({
    imports: [
        FormsModule, ReactiveFormsModule,
        CommonModule,
        BanksRouting,
        NgZorroAntdModule.forRoot(),
        UploadFileModule
    ],
    declarations: [
        BanksComponent,
        BankListComponent,
        AddBankComponent,
        EditBankComponent,
    ],
    providers: [
        BankListService,
        AddBankService,
        EditBankService,
    ]
})
export class BanksModule {}
