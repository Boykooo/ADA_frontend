import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ExceptionComponent } from '../components/exception/exception.component';
import { TestComponent } from '../components/test/test.component';
import { DumpsComponent } from '../components/dumps/dumps.component';
import { SettingsComponent } from '../components/settings/settings.component';
import { RestoreHistoryComponent } from '../components/history/restore-history.component';

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
    path: 'test',
    component: TestComponent
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
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class ConsoleRoutingModule {
}
