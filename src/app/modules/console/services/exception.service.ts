import { ErrorInfo } from '../../shared/response/model/error-info.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ExceptionService {

  errorInfo : ErrorInfo;

  constructor(private router: Router) {
  }

  public redirect(info: ErrorInfo) : void {
    this.router.navigate(['/exception']);
  }

  public getErrorInfo() {

  }
}
