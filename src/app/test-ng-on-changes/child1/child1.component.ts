import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Input()
  public userName: string = "";
  @Input()
  public userObj: any = {};

  public age: number = 18;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log(JSON.stringify(changes,null,4));
  }

  ngDoCheck():void{
    console.log("Child1 ngDoCheck..."+new Date());
  }
}
