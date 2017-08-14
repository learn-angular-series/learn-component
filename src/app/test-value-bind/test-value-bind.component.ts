import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-value-bind',
  templateUrl: './test-value-bind.component.html',
  styleUrls: ['./test-value-bind.component.css']
})
export class TestValueBindComponent implements OnInit {
  public imgSrc:string="./assets/imgs/1.jpg";

  constructor() { }

  ngOnInit() {
  }

  public changeSrc():void{
    if(Math.ceil(Math.random()*1000000000)%2){
      this.imgSrc="./assets/imgs/2.jpg";
    }else{
      this.imgSrc="./assets/imgs/1.jpg";
    }
  }
}
