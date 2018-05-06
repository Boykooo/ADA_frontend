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
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ConsoleNavbarComponent } from './components/shared/console-navbar/console-navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DumpsComponent } from './components/dumps/dumps.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RestoreHistoryComponent } from './components/restore-history/restore-history.component';
import { RestoreHistoryService } from './services/restore-history.service';
import { DumpService } from './services/dump.service';
import { SystemComponent } from './components/system/system.component';
import { TestingComponent } from './components/testing/testing.component';
import { UsersComponent } from './components/users/users.component';
import { AccountService } from './services/account.service';
import { NewUserDialogComponent } from './components/users/dialogs/new-user/new-user-dialog.component';
import { RoleService } from './services/role.service';
import { DeleteUserDialogComponent } from './components/users/dialogs/delete-user/delete-user-dialog.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';

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
    TestingComponent,
    UsersComponent,
    NewUserDialogComponent,
    DeleteUserDialogComponent,
    UserEditComponent
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
    DumpService,
    AccountService,
    RoleService
  ],
  entryComponents: [
    NewUserDialogComponent,
    DeleteUserDialogComponent
  ]
})
export class ConsoleModule {
}
