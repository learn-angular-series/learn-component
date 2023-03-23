import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'local-child1',
  templateUrl: './local-child1.component.html',
  styleUrls: ['./local-child1.component.css']
})
export class LocalChild1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public writeData():void{
    window.localStorage.setItem("userInfo",JSON.stringify({
      name:'大漠穷秋',
      age:18,
      area:"江苏省南京市"
    }));
  }
}
