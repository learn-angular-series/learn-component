import { Component, OnInit, Input, ChangeDetectionStrategy  } from '@angular/core';

@Component({
  selector: 'life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LifeCycleComponent implements OnInit {
  public logs: Array<string> = [];

  @Input()
  public title:string="";

  constructor() {
    /**
     * 构造函数里面最好只做一些简单的赋值操作，不要做复杂的逻辑
     * 获取服务端数据、业务逻辑等不要实现在构造函数里面
     * 想知道详细的原因请看这篇解释http://misko.hevery.com/code-reviewers-guide/flaw-constructor-does-real-work/
     */
    this.logs.push("constructor...");
  }

  ngOnChanges() {
    this.logs.push("ngOnChanges...");
  }

  ngOnInit() {
    this.logs.push("ngOnInit...");
  }

  ngDoCheck() {
    this.logs.push("ngDoCheck...");
  }

  ngAfterContentInit() {
    this.logs.push("ngAfterContentInit...");
  }

  ngAfterContentChecked() {
    this.logs.push("ngAfterContentChecked...");
  }

  ngAfterViewInit() {
    this.logs.push("ngAfterViewInit...");
  }

  ngAfterViewChecked() {
    this.logs.push("ngAfterViewChecked...");
  }

  ngOnDestory() {
    this.logs.push("ngOnDestory...");
  }
}
