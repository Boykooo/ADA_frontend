import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { log } from 'util';
import { LoginModel } from '../../model/login.model';
import { BaseResponse } from '../../../common/response/base.response';
import { ResponseStatus } from '../../../common/response/model/response-status.model';
import { ErrorResponse } from '../../../common/response/error.response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService) {
  }

  public test(): void {
    try {
      let loginModel = new LoginModel();
      loginModel.email = 'test@test.ru';
      loginModel.password = 'test';
      this.authService.login(loginModel)
        .subscribe(response => {
          let baseResponse = response as BaseResponse;
          if (baseResponse.status === ResponseStatus.OK) {
            log("OK");
          } else {
            let errorResponse = baseResponse as ErrorResponse;
            console.log(errorResponse);
          }
        });
    } catch (ex) {
      log('error');
    }
  }
}
