import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-safe-nav',
  templateUrl: './test-safe-nav.component.html',
  styleUrls: ['./test-safe-nav.component.css']
})
export class TestSafeNavComponent implements OnInit {
  public currentRace: any = null;//{name:'神族'};

  constructor() { }

  ngOnInit() {
  }

}
