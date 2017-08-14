import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-event-binding',
  templateUrl: './test-event-binding.component.html',
  styleUrls: ['./test-event-binding.component.css']
})
export class TestEventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public btnClick(event):void{
    alert("测试事件绑定！");
  }
}
