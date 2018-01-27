import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginModel } from '../../model/login.model';
import { ResponseStatus } from '../../../common/response/model/response-status.model';
import { DataResponse } from '../../../common/response/data.response';
import { AuthDataModel } from '../../model/auth-data.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService) {
  }

  public test(): void {
    let loginModel = new LoginModel();
    loginModel.email = 'test@test.ru';
    loginModel.password = 'test';
    this.authService.login(loginModel)
      .subscribe(baseResponse => {
        if (baseResponse.status === ResponseStatus.OK) {
          this.authService.successLogin(baseResponse as DataResponse<AuthDataModel>);
      } else {
          console.log('error');
        }
      });
  }
}
