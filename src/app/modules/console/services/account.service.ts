import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { AccountDto } from '../dto/account-dto';
import { Observable } from 'rxjs/Observable';
import { BaseResponse } from '../../shared/response/base.response';

@Injectable()
export class AccountService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.authUrl + '/account';
  }

  public getAccounts(page: number, size: number): Observable<BaseResponse> {
    return this.httpClient.get<BaseResponse>(
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

  public createAccount(accountDto: AccountDto): Observable<BaseResponse> {
    return this.httpClient.post<BaseResponse>(
      this.url,
      accountDto,
      {
        withCredentials: true
      }
    );
  }

  public deleteAccount(id: number): Observable<BaseResponse> {
    return this.httpClient.delete<BaseResponse>(
      this.url + '/' + id,
      {
        withCredentials: true
      }
    );
  }

  public getAccount(id): Observable<BaseResponse> {
    return this.httpClient.get<BaseResponse>(
      this.url + '/' + id,
      {
        withCredentials: true
      }
    );
  }

  public updateAccount(accountDto: AccountDto): Observable<BaseResponse> {
    return this.httpClient.put<BaseResponse>(
      this.url,
      accountDto,
      {
        withCredentials: true
      }
    )
  }
}
