import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestoreHistoryService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:9082/restore-history';
  }

  getRestoreHistories(page: number, size: number): any {
    return this.httpClient.get(this.url,
      {
        params: {
          page : page.toString(),
          size: size.toString()
        },
        withCredentials: true
      }
    )
  }

}
