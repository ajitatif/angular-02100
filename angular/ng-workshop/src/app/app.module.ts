import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { WelcomeHeadingComponent } from './welcome-heading/welcome-heading.component';
import { CasePipe } from './case.pipe';
import { ServiceConfigComponent } from './service-config/service-config.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeHeadingComponent,
    CasePipe,
    ServiceConfigComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
