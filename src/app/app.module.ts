import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestViewChildComponent } from './test-view-child/test-view-child.component';
import { ChildOneComponent } from './test-view-child/child-one/child-one.component';

@NgModule({
  declarations: [
    AppComponent,
    TestViewChildComponent,
    ChildOneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
