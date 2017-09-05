import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.scss']
})
export class NgContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public doSomething():void{
    alert("最外层sayhello!");
  }
}
