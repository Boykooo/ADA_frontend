import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestoreHistoryService {

  private url: string;

  constructor(private httpClient: HttpClient) {
  }

  getRestoreHistories(page: number, size: number) {
    this.url = 'http://localhost:9082/security/test';
    this.httpClient.get(this.url, {withCredentials: true})
      .subscribe();
  }

}
