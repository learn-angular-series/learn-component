import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss']
})
export class ChildTwoComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  public sayHello(): void {
    console.log("Hello 大漠穷秋!");
  }
}
