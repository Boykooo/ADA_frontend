import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RestoreHistoryService } from '../../services/restore-history.service';
import { BaseResponse } from '../../../shared/response/base.response';
import { ResponseStatus } from '../../../shared/response/model/response-status.model';
import { RestoreHistory } from '../../domain/restore-history';
import { ErrorResponse } from '../../../shared/response/error.response';
import { RestoreHistoryContainer } from '../../domain/restore-history-container';
import { DataResponse } from '../../../shared/response/data.response';

@Component({
  selector: 'app-restore-history',
  templateUrl: './restore-history.component.html',
  styleUrls: ['restore-history.component.css']
})
export class RestoreHistoryComponent implements OnInit {

  lastRestore: RestoreHistory;
  restores: RestoreHistory[];

  constructor(private titleService: Title,
              private restoreHistoryService: RestoreHistoryService) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Restore history');
    this.lastRestore = new RestoreHistory();
    this.restores = [];
    this.initData();
  }

  initData(): void {
    this.restoreHistoryService.getRestoreHistories(0, 10)
      .subscribe(
        (baseResponse: BaseResponse) => {
          if (baseResponse.status == ResponseStatus.OK) {
            let dataResponse = baseResponse as DataResponse<RestoreHistoryContainer>;
            this.lastRestore = dataResponse.response.lastRestore;
            this.restores = dataResponse.response.restores;
          } else {
            console.log((baseResponse as ErrorResponse).errorInfo);
          }
        }
      )
  }
}
