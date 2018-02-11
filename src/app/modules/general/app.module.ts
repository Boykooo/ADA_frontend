import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { HomeModule } from '../home/home.module';
import { AppRoutingModule } from './routing/app-routing-module';
import { BrowserModule } from '@angular/platform-browser';
import { ConsoleModule } from '../console/console.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ConsoleModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
