import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  public panelTitle:string="我是子组件";

  @Output()
  public follow=new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public emitAnEvent():void{
    this.follow.emit("follow");
  }

  public childFn():void{
    alert("父组件调用子组件方法！");
  }
}
