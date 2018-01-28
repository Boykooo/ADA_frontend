import { LoginModel } from '../model/login.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseResponse } from '../../common/response/base.response';
import { RoutingService } from './routing.service';
import { CookieService } from 'ngx-cookie-service';
import { DataResponse } from '../../common/response/data.response';
import { AuthDataModel } from '../model/auth-data.model';

@Injectable()
export class AuthService {

  private url: string;
  private authData: AuthDataModel;

  constructor(private httpClient: HttpClient,
              private routingService: RoutingService,
              private cookieService: CookieService) {
    this.url = 'http://localhost:9081/auth';
    this.init();
  }

  private init(): void {
    let token = this.cookieService.get('token');
    if (token != null) {
      this.authData = new AuthDataModel();
      this.authData.token = token;
    }
  }

  public login(loginModel: LoginModel): Observable<BaseResponse> {
    return this.httpClient.post<BaseResponse>(
      this.url + '/login',
      loginModel,
    );
  }

  public checkLogin(): void {
    if (!this.isLogin()) {
      this.routingService.toLogin();
    }
  }

  public successLogin(dataResponse: DataResponse<AuthDataModel>) {
    this.authData = dataResponse.response;
    this.cookieService.set('token', this.authData.token);
  }

  private isLogin(): boolean {
    return this.authData != null;
  }

  public logout() {
    this.cookieService.deleteAll();
    this.authData = null;
  }
}
