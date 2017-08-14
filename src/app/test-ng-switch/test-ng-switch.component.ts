import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-ng-switch',
  templateUrl: './test-ng-switch.component.html',
  styleUrls: ['./test-ng-switch.component.css']
})
export class TestNgSwitchComponent implements OnInit {
  public mapStatus:string="下载中";
  
  constructor() { }

  ngOnInit() {
  }

}
