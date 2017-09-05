import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls  : ['./breadcrumb.component.less']
})
export class BreadCrumbComponent implements OnInit {
    currentTitle: string = '';
    currentUrl: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
   ) {
    this.currentUrl = router.url;
    let children = router.config[0]['children'];
    // for(let i of children){
    //   if(this.currentUrl == ('/' + i.path)){
    //     this.currentTitle = i.data['title'];
    //     break;
    //   }
    // }
  }

  ngOnInit() {
    // 
  }

  dashBoard() {
      this.router.navigate(['./dashboard']);
  }
}
