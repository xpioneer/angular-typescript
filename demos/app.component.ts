import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.Emulated,
  imports: [
    RouterOutlet
  ],
  template: `
    <h1>Angular Router Sample</h1>
    <nav>
      <a class="button" routerLink="/crisis-list">Crisis Center</a> |
      <a class="button" routerLink="/heroes-list">Heroes</a>
    </nav>
    <h2>Hello, Angular</h2>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {

  constructor () {
  }

  public ngOnInit () {
    console.log('demo app entry')
  }
}
