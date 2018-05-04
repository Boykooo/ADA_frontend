import { LoginModel } from '../domain/login.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseResponse } from '../../shared/response/base.response';
import { RoutingService } from './routing.service';
import { CookieService } from 'ngx-cookie-service';
import { DataResponse } from '../../shared/response/data.response';
import { AuthDataModel } from '../domain/auth-data.model';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AuthService {

  private url: string;
  private authData: AuthDataModel;
  private tokenKey: string;

  constructor(private httpClient: HttpClient,
              private routingService: RoutingService,
              private cookieService: CookieService) {
    this.url = environment.authUrl + '/auth';
    this.tokenKey = 'Auth-Token';
    this.init();
  }

  private init(): void {
    let token = this.cookieService.get(this.tokenKey);
    if (token) {
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

  public register(loginModel: LoginModel): Observable<BaseResponse> {
    return this.httpClient.post<BaseResponse>(
      this.url + '/register',
      loginModel,
      {
        withCredentials: true
      }
    );
  }

  public checkLogin(): void {
    if (!this.isLogin()) {
      this.routingService.toLogin();
    }
  }

  public successLogin(dataResponse: DataResponse<AuthDataModel>) {
    this.authData = dataResponse.response;
    this.cookieService.set(this.tokenKey, this.authData.token);
  }

  private isLogin(): boolean {
    return this.authData != null;
  }

  public logout() {
    this.cookieService.deleteAll();
    this.authData = null;
  }
}
