import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {
  @Input()
  public title:string="我是ChildOne";

  @Output()
  helloEvent:EventEmitter<string>=new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  
  public sayHello():void{
    this.helloEvent.emit("hello...");
  }
}
