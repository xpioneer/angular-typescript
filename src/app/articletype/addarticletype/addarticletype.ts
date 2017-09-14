import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';
import { ArticleTypeModel } from '../model/articletype.model';
// import { AddBankService } from './addbank.service';

@Component({
  selector: 'app-add-bank',
  templateUrl: './addarticletype.html',
  styles: []
})
export class AddArticleTypeComponent implements OnInit {
    formGroup: FormGroup;
    isConfirmLoading = false;
    addBank:ArticleTypeModel = new ArticleTypeModel();
    @ViewChild('form') private form: NgForm;

    visible = {};
    options: Array<any>;
    cityLists: Array<any> = [];
    cityChecked = {};

    constructor(
        private router: Router,
        private fb: FormBuilder,
        // private addBankService: AddBankService,
        private notification: NzNotificationService
    ) { }

    ngOnInit() {
      // this.getData();
    }

    back() {
      this.router.navigate(['./article']);
    }

}
