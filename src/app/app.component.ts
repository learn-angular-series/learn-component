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
}
