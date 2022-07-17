import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ChildWithDefaultComponent, ChildWithOnpushComponent } from '@my/components';

@NgModule({
  declarations: [
    AppComponent,
    ChildWithDefaultComponent,
    ChildWithOnpushComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
