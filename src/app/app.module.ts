import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestNgClassComponent } from './test-ng-class/test-ng-class.component';
import { TestNgStyleComponent } from './test-ng-style/test-ng-style.component';
import { TestInterpolationComponent } from './test-interpolation/test-interpolation.component';
import { TestTempRefVarComponent } from './test-temp-ref-var/test-temp-ref-var.component';
import { TestNgIfComponent } from './test-ng-if/test-ng-if.component';
import { TestNgForComponent } from './test-ng-for/test-ng-for.component';
import { TestNgSwitchComponent } from './test-ng-switch/test-ng-switch.component';
import { TestNgModelComponent } from './test-ng-model/test-ng-model.component';
import { TestValueBindComponent } from './test-value-bind/test-value-bind.component';
import { TestEventBindingComponent } from './test-event-binding/test-event-binding.component';
import { TestTwowayBindingComponent } from './test-twoway-binding/test-twoway-binding.component';
import { FontResizerComponent } from './test-twoway-binding/font-resizer/font-resizer.component';
import { TestPipeComponent } from './test-pipe/test-pipe.component';
import { TestSafeNavComponent } from './test-safe-nav/test-safe-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TestNgClassComponent,
    TestNgStyleComponent,
    TestInterpolationComponent,
    TestTempRefVarComponent,
    TestNgIfComponent,
    TestNgForComponent,
    TestNgSwitchComponent,
    TestNgModelComponent,
    TestValueBindComponent,
    TestEventBindingComponent,
    TestTwowayBindingComponent,
    FontResizerComponent,
    TestPipeComponent,
    TestSafeNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
