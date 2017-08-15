import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-ng-on-changes',
  templateUrl: './test-ng-on-changes.component.html',
  styleUrls: ['./test-ng-on-changes.component.css']
})
export class TestNgOnChangesComponent implements OnInit {
  public userName:string="默认用户1";
  public userObj:any={userName:'默认用户2'};

  constructor() { }

  ngOnInit() {
  }

}
