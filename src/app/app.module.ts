import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentAndChildComponent } from './parent-and-child/parent-and-child.component';
import { ChildComponent } from './parent-and-child/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentAndChildComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
