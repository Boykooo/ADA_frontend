import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginModel } from '../../domain/login.model';
import { ResponseStatus } from '../../../shared/response/model/response-status.model';
import { DataResponse } from '../../../shared/response/data.response';
import { AuthDataModel } from '../../domain/auth-data.model';
import { RoutingService } from '../../services/routing.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel;

  constructor(private authService: AuthService,
              private routingService: RoutingService,
              private titleService: Title) {
  }

  ngOnInit(): void {
    this.loginModel = new LoginModel();
    this.titleService.setTitle('Login');
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
