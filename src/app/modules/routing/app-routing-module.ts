import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { WelcomeComponent } from '../home/components/welcome/welcome.component';

const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
