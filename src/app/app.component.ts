import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = '星际争霸2';

  public isShow:boolean=true;

  public getVal():any{
    return 65535;
  }

  public sayHello(name:string):void{
    alert(name);
  }

  public toggleShow():void{
    this.isShow=!this.isShow;
  }
}
