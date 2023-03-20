import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StandaloneComponentComponent } from './standalone-component/standalone-component.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StandaloneComponentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
