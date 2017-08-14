import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-temp-ref-var',
  templateUrl: './test-temp-ref-var.component.html',
  styleUrls: ['./test-temp-ref-var.component.css']
})
export class TestTempRefVarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public sayHello(name:string):void{
    alert(name);
  }
}
