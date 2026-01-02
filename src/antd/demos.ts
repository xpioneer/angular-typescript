import { Component, NgModule } from '@angular/core'
import { NzFlexDirective } from 'ng-zorro-antd/flex';

// demo for NzFlexDirective use specially

/**
 * your component
 */
@Component({
  selector: 'app-your-component',
  template: '<div></div>',
  styles: ['']
})
export class YourComponent {
  // ...
}

@NgModule({
  declarations: [
    YourComponent,
    NzFlexDirective // add NzFlexDirective to declarations
  ],
  // ... other configs
})
export class YourModule { }