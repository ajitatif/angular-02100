import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { WelcomeHeadingComponent } from './welcome-heading/welcome-heading.component';
import { CasePipe } from './case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeHeadingComponent,
    CasePipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
