import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable()
export class RestoreHistoryService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.geoUrl + '/restore-history'
  }

  getRestoreHistories(page: number, size: number): any {
    return this.httpClient.get(
      this.url,
      { withCredentials: true }
    ).subscribe();
  }

}
