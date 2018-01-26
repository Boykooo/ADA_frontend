import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../model/login.model';

export class AuthService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:9081/auth';
  }

  public login(loginModel: LoginModel): any {
    this.httpClient.post(
      this.url + '/login',
      loginModel
    ).subscribe();
  }

  public isLogin(): boolean {
    return false;
  }

}
