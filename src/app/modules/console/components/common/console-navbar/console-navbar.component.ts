import { Component, Input, Output } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-console-navbar',
  templateUrl: './console-navbar.component.html',
  styleUrls: ['./console-navbar.component.css']
})
export class ConsoleNavbarComponent {

  @Input()
  sidenavRef: MatSidenav;

  public toggleSidenav() {
    this.sidenavRef.toggle();
  }

}
