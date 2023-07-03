import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SubComponentOne } from './sub-component-1/sub-component-1.component';
import { OutputComponentComponent } from './output-component/output-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SubComponentOne,
    OutputComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
