import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthService } from './services/auth.service';
import { ConsoleRoutingModule } from './routing/console-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ExceptionComponent } from './components/exception/exception.component';
import { RoutingService } from './services/routing.service';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { TestComponent } from './components/test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    ExceptionComponent,
    TestComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    ConsoleRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [AuthService, RoutingService, CookieService]
})
export class ConsoleModule {
}
