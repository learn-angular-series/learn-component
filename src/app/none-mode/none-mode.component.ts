import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'none-mode',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './none-mode.component.html',
  styleUrls: ['./none-mode.component.scss']
})
export class NoneModeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
