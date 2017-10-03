import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';
import { BankModel } from '../model/bank.model';
import { EditBankService } from './editbank.service';

@Component({
  selector: 'app-edit-bank',
  templateUrl: './editbank.html',
  styles: [],
})
export class EditBankComponent implements OnInit {
  public isConfirmLoading = false;
  public editBank: BankModel = new BankModel();
  @ViewChild('form') private form: NgForm;

  public visible = {};
  public options: object[] = [];
  public _cityList: any = [];
  public cityLists: any[] = [];
  public cityChecked = {};
  public imgSrc: string;

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private editBankService: EditBankService,
    private notification: NzNotificationService,
    ) {
  }

  public ngOnInit () {
    this.options = [{id: 0, name: '未生效' }, {id: 1, name: '有效' } ];

    const id = this.route.params.subscribe((res) => {console.log(res); });
    if (id) {
        this.getData(id);
        this.getCityList();
    }
  }

  public getData (id: any) {
    this.editBankService.getBank(id).subscribe((res: any) => {
        if (res.success) {
        const data = res.data;
        this.editBank = data;
        console.log(this.editBank);
        for (const i of data.serviceCity) {
            this.cityChecked[i] = true;
        }
        }
    }, (err: any) => {
        this.notification.error('错误', err.msg);
    });
  }

  public getCityList () {
    this.editBankService.getCityList().subscribe((res: any) => {
        if (res.success) {
        this.cityLists = res.data;
        }
    }, (err: any) => {
        this.notification.error('错误', err.msg);
    });
  }

  public save () {
    for (const i in this.form.controls) {
        this.form.controls[ i ].markAsDirty();
    }
    this.editBank.serviceCity = this.getSelectedCity();
    if (this.form.valid) {
        this.isConfirmLoading = true;
        this.editBankService.updateBank(this.editBank).subscribe((res: any) => {
        this.isConfirmLoading = false;
        if (res.success) {
            this.notification.success('成功', res.msg);
            this.router.navigate(['/banks' ]);
        } else {
            this.notification.warning('警告', res.msg);
        }
        }, (err: any) => {
        this.notification.error('警告', err.msg);
        this.isConfirmLoading = false;
        });
    }
  }

  public show (i: number) {
    this.visible[i] = true;
  }

  public close (i: number) {
    this.visible[i] = false;
  }

  public getSelectedCity () {
    const arr = [];
    for (const key in this.cityChecked) {
        if (this.cityChecked[key]) {
        arr.push(Number(key));
        }
    }
    return arr;
  }

  public back () {
    this.router.navigate(['./banks' ]);
  }
}
