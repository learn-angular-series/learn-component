import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestContentChildComponent } from './test-content-child/test-content-child.component';
import { ChildOneComponent } from './test-content-child/child-one/child-one.component';
import { ChildTwoComponent } from './test-content-child/child-two/child-two.component';

@NgModule({
  declarations: [
    AppComponent,
    TestContentChildComponent,
    ChildOneComponent,
    ChildTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
