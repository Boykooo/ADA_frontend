import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RoutingService {

  constructor(private router: Router) {
  }

  public toException(): void {
    this.router.navigateByUrl('/exception');
  }

  public toLogin(): void {
    this.router.navigateByUrl('/login');
  }

  public toWelcome(): void {
    this.router.navigateByUrl('/welcome');
  }

}
