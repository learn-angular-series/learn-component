import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = '假的星际争霸2';

  public isShow:boolean=true;

  public races:Array<any>=[
    {name:"人族"},
    {name:"虫族"},
    {name:"神族"}
  ];

  public mapStatus:string="下载中";

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
