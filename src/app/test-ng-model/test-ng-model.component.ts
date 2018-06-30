import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-ng-model',
  templateUrl: './test-ng-model.component.html',
  styleUrls: ['./test-ng-model.component.css']
})
export class TestNgModelComponent implements OnInit {
  public currentRace: any = { name: "随机种族" };

  constructor() { }

  ngOnInit() {
    // setInterval(() => {
    //   this.currentRace.name = Math.random() * 1000 + "";
    // }, 1000);
  }

}
