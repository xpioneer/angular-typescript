import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {
    DomSanitizer,
    SafeHtml,
    SafeUrl,
    SafeStyle
} from '@angular/platform-browser';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
    selector: 'app-upload-file',
    templateUrl: './upload-file.html',
    styles: [`
      .upload-file-wrap:after{
        display: block;
        content: '';
        clear: both;
      }
      .upload-file-input {
          position: absolute;
          clip: rect(0 0 0 0);
      }
      label.bank-logo-label {
          margin-right: 10px;
          float: left;
          position: relative;
          border: 4px solid #ccc;
          width: 80px;
          height: 80px;
          cursor: pointer;
      }
      label.bank-logo-label::before {
          position: absolute;
          content: '';
          display: block;
          width: 4px;
          height: 60px;
          background-color: #ccc;
          top: 6px;
          left: 34px;
      }
      label.bank-logo-label::after {
          position: absolute;
          content: '';
          display: block;
          width: 60px;
          height: 4px;
          background-color: #ccc;
          top: 34px;
          left: 6px;
      }
      .file-uploading{
        z-index: 2;
        position: absolute;
        top: 0;
        left: 0;
        width: 80px;
        height: 80px;
        background-color: rgba(255,255,255, 0.8);
        font-style: normal;
        text-align: center;
        padding-top: 20px;
      }
 
      .file-list img{
        display: block;
        float: left;
        width: 80px;
        height: 80px;  
        border:1px solid #ccc;
      }
    `]
})
export class UploadFileComponent {
  baseUrl: string = '/api/file/uploadFile';
  show: boolean = true;
  uploading: boolean = false;
  @Input() imgSrc: any;
  @Input() maxSize: number;
  @Output() fileUploaded:EventEmitter<Object> = new EventEmitter();

  constructor(
    private http: HttpClient,
    private notification: NzNotificationService
  ){}

  ngOnInit(){
    if(!this.imgSrc){
      this.imgSrc = '';
      this.show = false;
    }
  }

  ngOnChanges(){
    this.show = !!this.baseUrl;
  }
  
  fileChange(event: any):void{
    if(event.target && event.target.files.length > 0){
      let reader = new FileReader(),
          file = event.target.files[0],
          formData = new FormData();
      formData.append('file', file);
      if(this.maxSize && file.size > this.maxSize * 1024){
          event.target.value = '';
          this.notification.warning('警告', `图片大小超出${this.maxSize}K！`);
      }else{
          this.uploading = true;
          this.http.post(this.baseUrl, formData).subscribe((res: any) => {
            if(res.success){
              reader.onload = (e: any) => {
                this.imgSrc = reader.result;
                this.show = true;
              }
              reader.readAsDataURL(file);
              this.fileUploaded.emit(res.data);
            }else{
              event.target.value = '';
              this.notification.error('提示', res.msg);
            }
            this.uploading = false;
          }, (err: any) => {
            event.target.value = '';
            this.uploading = false;
            this.notification.error('错误', err.msg);
          });
      }

    }
  }

}
