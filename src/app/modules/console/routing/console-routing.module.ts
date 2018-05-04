import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ExceptionComponent } from '../components/exception/exception.component';
import { DumpsComponent } from '../components/dumps/dumps.component';
import { SettingsComponent } from '../components/settings/settings.component';
import { RestoreHistoryComponent } from '../components/restore-history/restore-history.component';
import { SystemComponent } from '../components/system/system.component';
import { TestingComponent } from '../components/testing/testing.component';
import { UsersComponent } from '../components/users/users.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'exception',
    component: ExceptionComponent
  },
  {
    path: 'dumps',
    component: DumpsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'history',
    component: RestoreHistoryComponent
  },
  {
    path: 'system',
    component: SystemComponent
  },
  {
    path: 'testing',
    component: TestingComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class ConsoleRoutingModule {
}
