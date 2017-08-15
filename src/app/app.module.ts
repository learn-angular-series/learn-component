import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { TestNgOnChangesComponent } from './test-ng-on-changes/test-ng-on-changes.component';
import { Child1Component } from './test-ng-on-changes/child1/child1.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    TestNgOnChangesComponent,
    Child1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
