import { Component } from '@angular/core';
import { DashBoardService } from "./dashboard.service";


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.html'
})
export class Dashboard {

    constructor(private _service: DashBoardService) {
        // 
    }

    ngOnInit(){
        // console.log(this)
    }

}
