import { HttpClient } from '@angular/common/http';

export class AuthService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:9081/auth/login';
  }

  public login(login: string, password: string): any {
    this.httpClient.post(
      this.url + ''
    ).
  }

  public isLogin(): boolean {
    return false;
  }

}
