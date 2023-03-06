import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'shadow-dom-mode',
  encapsulation:ViewEncapsulation.ShadowDom,
  templateUrl: './shadow-dom-mode.component.html',
  styleUrls: ['./shadow-dom-mode.component.scss']
})
export class ShadowDomModeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
