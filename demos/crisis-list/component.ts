import { Component, OnInit, ViewEncapsulation, OnChanges, OnDestroy, AfterContentChecked, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-crisis-list',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: `./crisis-list.component.html`,
})
export class CrisisListComponent implements OnInit, OnChanges, OnDestroy, AfterContentChecked {

  constructor () {
  }

  crisisName = ''

  public ngOnInit () {
    console.log('CrisisListComponent')
  }

  ngOnChanges() {
    console.log('ngOnChanges')
  }

  // 自定义变更检查
  ngDoCheck() {
    console.log('ngDoCheck', this.crisisName)
  }

  // 内容投影初始化完成后的逻辑
  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }

  // 每次内容变更检测后的逻辑
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked', this.crisisName)
  }

  // 视图初始化完成后的逻辑
  ngAfterViewInit() {
    console.log('ngAfterViewInit')
  }

  // 每次视图变更检测后的逻辑
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked', this.crisisName)
  }

  // 清理工作
  ngOnDestroy() {
    console.log('ngOnDestroy')
  }
}
