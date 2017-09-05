import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ChildTwoComponent } from './ng-content/child-two/child-two.component';
import { ChildThreeComponent } from './ng-content/child-three/child-three.component';

@NgModule({
  declarations: [
    AppComponent,
    NgContentComponent,
    ChildTwoComponent,
    ChildThreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
