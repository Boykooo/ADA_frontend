import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginModel } from '../../model/login.model';
import { ResponseStatus } from '../../../common/response/model/response-status.model';
import { DataResponse } from '../../../common/response/data.response';
import { AuthDataModel } from '../../model/auth-data.model';
import { RoutingService } from '../../services/routing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel;

  constructor(private authService: AuthService,
              private routingService: RoutingService) {
  }

  ngOnInit(): void {
    this.loginModel = new LoginModel();
  }

  public login(): void {
    console.log(this.loginModel.email, this.loginModel.password);
    this.authService.login(this.loginModel)
      .subscribe(baseResponse => {
        if (baseResponse.status === ResponseStatus.OK) {
          this.authService.successLogin(baseResponse as DataResponse<AuthDataModel>);
          this.routingService.toDashboard();
        } else {
          console.log('error login data');
        }
      });
  }

}
