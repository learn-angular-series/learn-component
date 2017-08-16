import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShadowDomModeComponent } from './shadow-dom-mode/shadow-dom-mode.component';
import { EmulateModeComponent } from './emulate-mode/emulate-mode.component';
import { NoneModeComponent } from './none-mode/none-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    ShadowDomModeComponent,
    EmulateModeComponent,
    NoneModeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
