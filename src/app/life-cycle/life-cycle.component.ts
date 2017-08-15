import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {
  public logs: Array<string> = [];

  @Input()
  public title:string="";

  constructor() { 
    this.logs.push("constructor...");
  }

  ngOnChanges() {
    this.logs.push("ngOnChanges...");
  }

  ngOnInit() {
    this.logs.push("ngOnInit...");
  }

  ngDoCheck() {
    this.logs.push("ngDoCheck...");
  }

  ngAfterContentInit() {
    this.logs.push("ngAfterContentInit...");
  }

  ngAfterContentChecked() {
    this.logs.push("ngAfterContentChecked...");
  }

  ngAfterViewInit() {
    this.logs.push("ngAfterViewInit...");
  }

  ngAfterViewChecked() {
    this.logs.push("ngAfterViewChecked...");
  }

  ngOnDestory() {
    this.logs.push("ngOnDestory...");
  }
}
