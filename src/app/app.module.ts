import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HrComponent } from './hr/hr.component';
import { TestComponent } from './test/test.component';
import { FrPipe } from './fr.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HrComponent,
    TestComponent,
    FrPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
