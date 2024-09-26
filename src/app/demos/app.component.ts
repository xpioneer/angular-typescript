import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.Emulated,
  template: `
    <h1>Angular Router Sample</h1>
    <app-crisis-list></app-crisis-list>
    <app-heroes-list></app-heroes-list>
  `,
})
export class AppComponent implements OnInit {

  constructor () {
  }

  public ngOnInit () {
    console.log('demo app entry')
  }
}
