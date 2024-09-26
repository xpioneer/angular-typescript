import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-crisis-list',
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: `./crisis-list.component.html`,
})
export class CrisisListComponent implements OnInit {

  constructor () {
  }

  public ngOnInit () {
    console.log('CrisisListComponent')
  }
}
