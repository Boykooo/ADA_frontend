import { LoginModel } from '../model/login.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    console.log('Added to cookie token = %s', this.authData.token);
  }

  public checkCookie(): void {
    let all = this.cookieService.getAll();
    console.log(all);
  }

  private isLogin(): boolean {
    return false;
  }
}
