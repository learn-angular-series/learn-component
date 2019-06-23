import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myTitle: string = "默认标题";
  
  /**
   * 这个例子用来解释changeDetection的执行次数
   * 详细的解释在这里：https://blog.angularindepth.com/a-gentle-introduction-into-change-detection-in-angular-33f9ffff6f10
   */
  // public _myTitle: string = "默认标题";
  // public get myTitle(){
  //   this._myTitle = "新标题" + new Date().toLocaleString();
  //   return this._myTitle;
  // }

  constructor() {
    //这里可以看到，定时器可以触发detection，这是由zone.js来保证的
    setInterval(() => {
      this.myTitle = "新标题" + new Date().toLocaleString();
    }, 1000);
  }

  /**
   * 与constructor的区别有两点：
   * - constructor里面可以进行依赖注入，ngOnInit不可以
   * - 对于@Input型的属性，在constructor里面访问是没有意义的，因为@Input型的属性与脏检查机制有关，这些属性到ngOnInit的时候才会有值（业务开发要特别注意这一点）
   * - 在业务开发过程中，ngOnInit用来放一些初始逻辑
   */
  ngOnInit(){
    //业务开发要特别注意，@Input型的属性到这里才会有值
  }

  ngOnChanges() {
    this.myTitle = "新标题" + new Date().toLocaleString();
  }

  ngDoCheck(){
    // this.myTitle = "新标题" + new Date().toLocaleString();
  }

  ngAfterContentChecked(){
    // this.myTitle = "新标题" + new Date().toLocaleString();
  }

  /**
   * Note：这个地方会抛异常
   * 因为ngAfterViewChecked是最后一个钩子，执行这个钩子的时候已经完成了上一轮detection
   * 所以这个时候，不可以再修改组件上用来进行值绑定的那些属性了，否则就会抛出异常
   */
  ngAfterViewChecked() {
    // this.myTitle = "新标题" + new Date().toLocaleString();
  }
}
