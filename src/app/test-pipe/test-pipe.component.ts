import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-pipe',
  templateUrl: './test-pipe.component.html',
  styleUrls: ['./test-pipe.component.css']
})
export class TestPipeComponent implements OnInit {
  public currentTime: Date = new Date();
  
  constructor() {
  }

  ngOnInit() {
    window.setInterval(
			()=>{this.currentTime=new Date()}
		,1000);
  }
}
