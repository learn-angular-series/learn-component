import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {
  @Output()
  myevent:EventEmitter<string>=new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public sayHello():void{
    this.myevent.emit("被投影的子组件也可以派发事件...");
  }
}
