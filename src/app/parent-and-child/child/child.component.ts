import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  private _panelTitle:string="我是子组件";
  
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

  public emitAnEvent(event):void{
    this.follow.emit("follow");
  }

  public childFn():void{
    console.log("子组件的名字是>"+this.panelTitle);
  }
}
