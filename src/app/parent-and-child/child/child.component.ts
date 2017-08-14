import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  public _panelTitle:string="我是子组件";
  
  @Input()
  set panelTitle(panelTitle:string){
    this._panelTitle="【"+panelTitle+"】";
  }

  get panelTitle():string{
    return this._panelTitle;
  }

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
