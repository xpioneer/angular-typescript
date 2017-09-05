import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MerchantRouting }       from './merchant.routing';
import { MerchantComponent } from './merchant.component';
import { MerchantListComponent } from './merchantlist/merchantlist';
import { AddMerchantComponent } from './addmerchant/addmerchant';
import { EditMerchantComponent } from './editmerchant/editmerchant';
import { MerchantListService } from './merchantlist/merchantlist.service';
import { AddMerchantService }  from './addmerchant/addmerchant.service';
import { EditMerchantService }  from './editmerchant/editmerchant.service';
import { UploadFileModule } from '../../components/upload-file/upload-file.module';

@NgModule({
    imports: [
        FormsModule, ReactiveFormsModule,
        CommonModule,
        MerchantRouting,
        NgZorroAntdModule.forRoot(),
        UploadFileModule
    ],
    declarations: [
        MerchantComponent,
        MerchantListComponent,
        AddMerchantComponent,
        EditMerchantComponent,
    ],
    providers: [
        MerchantListService,
        AddMerchantService,
        EditMerchantService,
    ]
})
export class MerchantModule {}
