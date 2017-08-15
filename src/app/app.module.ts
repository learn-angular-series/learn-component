import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { TestNgOnChangesComponent } from './test-ng-on-changes/test-ng-on-changes.component';
import { Child1Component } from './test-ng-on-changes/child1/child1.component';
import { ParentComponent } from './view-hook/parent/parent.component';
import { Child11Component } from './view-hook/parent/child11/child11.component';
import { Child22Component } from './view-hook/parent/child22/child22.component';
import { FatherComponent } from './ng-content/father/father.component';
import { Child33Component } from './ng-content/father/child33/child33.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    TestNgOnChangesComponent,
    Child1Component,
    ParentComponent,
    Child11Component,
    Child22Component,
    FatherComponent,
    Child33Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
