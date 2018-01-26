import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { HomeModule } from '../home/home.module';
import { AppRoutingModule } from '../routing/app-routing-module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
