import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestNgContentComponent } from './test-ng-content/test-ng-content.component';
import { ChildOneComponent } from './child-one/child-one.component';

@NgModule({
  declarations: [
    AppComponent,
    TestNgContentComponent,
    ChildOneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
