import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls  : ['./sidebar.component.less'],
})
export class SidebarComponent implements OnInit {

  public isOpenThree = true;

  public openChange (value: string) {
    //
  }

  public ngOnInit () {
  }
}
