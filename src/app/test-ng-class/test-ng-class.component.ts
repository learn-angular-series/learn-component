import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-ng-class',
  templateUrl: './test-ng-class.component.html',
  styleUrls: ['./test-ng-class.component.scss']
})
export class TestNgClassComponent implements OnInit {
  public currentClasses: {};

  public canSave: boolean = true;
  public isUnchanged: boolean = true;
  public isSpecial: boolean = true;

  constructor() { }

  ngOnInit() {

  }

  setCurrentClasses() {
    this.currentClasses = {
      'saveable': this.canSave,
      'modified': this.isUnchanged,
      'special': this.isSpecial
    };
  }
}
