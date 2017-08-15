import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child11',
  templateUrl: './child11.component.html',
  styleUrls: ['./child11.component.css']
})
export class Child11Component implements OnInit {
  public time:string=new Date().toLocaleString();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log("1号子组件的ngAfterViewInit...");
  }

  ngAfterViewChecked() {
    console.log("1号子组件的ngAfterViewChecked...");
  }

  public setTime(time:string):void{
    this.time=time;
  }
}
