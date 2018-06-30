import { Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList } from '@angular/core';
import { ChildTwoComponent } from '../child-two/child-two.component';

@Component({
  selector: 'child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {
  // @ContentChild(ChildTwoComponent)
  // childTwo:ChildTwoComponent;
  @ContentChildren(ChildTwoComponent)
  childrenTwo: QueryList<ChildTwoComponent>;

  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit(): void {
    // console.log(this.childTwo);
    this.childrenTwo.forEach((item) => {
      console.log(item);
    });
  }
}
