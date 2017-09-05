import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls  : ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {
  isOpenThree = true;

  openChange(value: string) {
    // 
  }

  constructor() {
  }

  ngOnInit() {
  }
}
