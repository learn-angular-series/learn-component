import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'local-child2',
  templateUrl: './local-child2.component.html',
  styleUrls: ['./local-child2.component.css']
})
export class LocalChild2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public readData():void{
    var userName=window.localStorage.getItem("userName");
    console.log(userName);
  }
}
