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
    window.localStorage.setItem("userName","大漠穷秋");
  }
}
