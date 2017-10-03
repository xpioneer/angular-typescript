import { CommonModule }  from '@angular/common';
import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { UploadFileModule } from '../../components/upload-file/upload-file.module';
import { AddBankComponent }  from './addbank/addbank.component';
import { AddBankService }  from './addbank/addbank.service';
import { BankListComponent } from './banklist/banklist.component';
import { BankListService } from './banklist/banklist.service';
import { BanksComponent }         from './banks.component';
import { BanksRouting }       from './banks.routing';
import { EditBankComponent }  from './editbank/editbank.component';
import { EditBankService }  from './editbank/editbank.service';

@NgModule({
    imports: [
        FormsModule, ReactiveFormsModule,
        CommonModule,
        BanksRouting,
        NgZorroAntdModule.forRoot(),
        UploadFileModule,
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
    ],
})
export class BanksModule {}
