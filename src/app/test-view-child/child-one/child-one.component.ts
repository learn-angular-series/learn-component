import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { uuid } from "uuid";

@Component({
  selector: 'child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {
  public id: string;

  @Input()
  public title: string = "我是ChildOne";

  @Output()
  helloEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.id = uuid();
  }

  ngOnInit() {
  }

  public sayHello(): void {
    this.helloEvent.emit(this.id);
  }
}
