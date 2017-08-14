import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-ng-style',
  templateUrl: './test-ng-style.component.html',
  styleUrls: ['./test-ng-style.component.css']
})
export class TestNgStyleComponent implements OnInit {
  public currentStyles: {}
  public canSave:boolean=false;
  public isUnchanged:boolean=false;
  public isSpecial:boolean=false;
  
  constructor() { }

  ngOnInit() {
  }

  setCurrentStyles() {
    this.currentStyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px'
    };
  }
}
