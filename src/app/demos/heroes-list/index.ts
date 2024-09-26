import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: `./heroes-list.component.html`,
})
export class HeroesListComponent implements OnInit {

  constructor () {
  }

  public ngOnInit () {
    console.log('HeroesListComponent')
  }
}
