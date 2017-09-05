import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'test-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.scss']
})
export class ChildThreeComponent implements OnInit {
  @Output()
  public sayhello:EventEmitter<any>=new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public sayHello():void{
    this.sayhello.emit("sayhello");
  }
}
