import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent
  ],
  imports: [],
  providers: [AuthService]
})
export class ConsoleModule {
}
