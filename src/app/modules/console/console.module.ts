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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { ConsoleNavbarComponent } from './components/common/console-navbar/console-navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DumpsComponent } from './components/dumps/dumps.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RestoreHistoryComponent } from './components/restore-history/restore-history.component';
import { RestoreHistoryService } from './services/restore-history.service';
import { DumpService } from './services/dump.service';
import { SystemComponent } from './components/system/system.component';
import { TestingComponent } from './components/testing/testing.component';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    ExceptionComponent,
    NavbarComponent,
    ConsoleNavbarComponent,
    DumpsComponent,
    SettingsComponent,
    RestoreHistoryComponent,
    SystemComponent,
    TestingComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    ConsoleRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    AuthService,
    RoutingService,
    CookieService,
    RestoreHistoryService,
    DumpService
  ]
})
export class ConsoleModule {
}
