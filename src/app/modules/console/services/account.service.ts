import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AccountService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.authUrl + '/account';
  }

  public getAccounts(page: number, size: number): any {
    return this.httpClient.get(
      this.url,
      {
        params: {
          page: page.toString(),
          size: size.toString()
        },
        withCredentials: true
      }
    );
  }

}
