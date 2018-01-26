import { LoginModel } from '../model/login.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseResponse } from '../../common/response/base.response';
import { logger } from 'codelyzer/util/logger';

@Injectable()
export class AuthService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:9081/auth';
  }

  public login(loginModel: LoginModel): Observable<BaseResponse> {
    return this.httpClient.post<BaseResponse>(
      this.url + '/login',
      loginModel,
    );
  }

  public isLogin(): boolean {
    return false;
  }
}
