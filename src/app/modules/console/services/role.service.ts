import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { BaseResponse } from '../../shared/response/base.response';

@Injectable()
export class RoleService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.authUrl + '/role';
  }

  public getAllRoles(): Observable<BaseResponse> {
    return this.httpClient.get<BaseResponse>(
      this.url,
      {
        withCredentials: true
      }
    )
  }

}
