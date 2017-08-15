import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child22',
  templateUrl: './child22.component.html',
  styleUrls: ['./child22.component.css']
})
export class Child22Component implements OnInit {
  public time:string=new Date().toLocaleString();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log("2号子组件的ngAfterViewInit...");
  }

  ngAfterViewChecked() {
    console.log("2号子组件的ngAfterViewChecked...");
  }

  public setTime(time:string):void{
    this.time=time;
  }
}
