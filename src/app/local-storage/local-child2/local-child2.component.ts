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
    var json=window.localStorage.getItem("json");
    // window.localStorage.removeItem("json");
    var obj=JSON.parse(json);
    console.log(obj.name);
    console.log(obj.age);
  }
}
