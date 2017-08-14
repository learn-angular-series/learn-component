import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-interpolation',
  templateUrl: './test-interpolation.component.html',
  styleUrls: ['./test-interpolation.component.css']
})
export class TestInterpolationComponent implements OnInit {
  public title = '假的星际争霸2';  
  constructor() { }

  ngOnInit() {
  }

  public getVal():any{
    return 65535;
  }
}
