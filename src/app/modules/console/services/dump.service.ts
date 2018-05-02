import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestoreParams } from '../dto/restore-params';

@Injectable()
export class DumpService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.geoUrl + '/dump';
  }

  public getLocalDumps(): any {
    return this.httpClient.get(
      this.url + '/local',
      {
        withCredentials: true
      }
    );
  }

  public restore(restoreParams: RestoreParams): any {
    return this.httpClient.post(
      this.url + '/restore',
      restoreParams,
      {
        withCredentials: true
      }
    );
  }

}
