import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ChildOneComponent } from './child-one/child-one.component';

@Component({
  selector: 'test-view-child',
  templateUrl: './test-view-child.component.html',
  styleUrls: ['./test-view-child.component.scss']
})
export class TestViewChildComponent implements OnInit {
  // @ViewChild(ChildOneComponent)
  // childOne:ChildOneComponent;
  @ViewChildren(ChildOneComponent)
  children:QueryList<ChildOneComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit():void{
    // console.log(this.childOne);
    // this.childOne.helloEvent.subscribe((param)=>{
    //   console.log(this.childOne.title);
    // });
    this.children.forEach((item)=>{
      // console.log(item);
      //动态监听子组件的事件
      item.helloEvent.subscribe((data)=>{
        console.log(data);
      });
    });
  }
}
