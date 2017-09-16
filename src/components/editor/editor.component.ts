import { Component, OnInit, Input, Output, EventEmitter, forwardRef, ElementRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { NzNotificationService } from 'ng-zorro-antd';

const Quill = require('quill');

const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': <any>[] }, { 'background': <any>[] }],          // dropdown with defaults from theme
    [{ 'font': <any>[] }],
    [{ 'align': <any>[] }],

    ['link', 'image'],

    ['clean']                                         // remove formatting button
];

@Component({
    selector: 'app-editor',
    template: `
      <div #editor></div>
      <input [(ngModel)]="editorVal" style="display:none;"/>
    `,
    styles: [
      `
        .ql-container{min-height:600px;}
      `
    ],
    providers    : [
      {
        provide    : NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => EditorComponent),
        multi      : true
      }
    ],
})
export class EditorComponent implements ControlValueAccessor {
  baseUrl: string = '/api/upload-file';
  _value: any;
  @ViewChild('editor') private editor: ElementRef;

  @Input() imgSrc: any;
  @Output() fileUploaded:EventEmitter<Object> = new EventEmitter();
    
  quillEditor:any = {};

  onChange: any = Function.prototype;
  onTouched: any = Function.prototype;

  constructor(
    private http: HttpClient,
    private notification: NzNotificationService
  ){}

  ngOnInit(){
    this.quillEditor = new Quill(this.editor.nativeElement, {
        debug: false,
        modules: {
            toolbar: toolbarOptions
        },
        placeholder: '请在这里写下你的内容...',
        readOnly: false,
        theme: 'snow'
    });
    console.log(this.quillEditor, 'this.quillEditor')
    // this.quillEditor.on('text-change', (eventName:any, arg:any) => {
    //   console.log(eventName, arg)
    // });
    this.quillEditor.on('editor-change', (delta:any, oldDelta:any, source:any) => {
      console.log('editor-change')
      let _html = this.quillEditor.root.innerHTML;
      if (_html === '<p><br></p>') { _html = null; }
      this.onChange(_html);
    });
  }

  ngOnChanges(){
    // 
  }
  
  

  get editorVal(){
    return this._value;
  }

  set editorVal(val: any){
    if ((this._value === val) || (((this._value === undefined) || (this._value === null)) && ((val === undefined) || (val === null)))) {
      return;
    }
    if (val !== this._value) {
      this._value = val;
      this.onChange(val);
      this.quillEditor.root.innerHTML = val;
    }
  }

  writeValue(value: any): void{
    this.editorVal = value;
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

}
