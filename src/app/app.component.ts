import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myTitle: string = "默认标题";

  constructor() {
    setInterval(() => {
      this.myTitle = "新标题" + new Date().toLocaleString();
    }, 1000);
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
