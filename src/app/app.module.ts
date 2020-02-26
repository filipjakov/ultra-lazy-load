import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Lazy1Component } from './lazy1.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, Lazy1Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
