import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgToddModule } from 'ng-todd';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgToddModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
