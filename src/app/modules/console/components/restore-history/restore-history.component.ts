import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RestoreHistoryService } from '../../services/restore-history.service';
import { BaseResponse } from '../../../shared/response/base.response';
import { ResponseStatus } from '../../../shared/response/model/response-status.model';
import { RestoreHistory } from '../../domain/restore-history';
import { ErrorResponse } from '../../../shared/response/error.response';
import { RestoreHistoryContainer } from '../../dto/restore-history-container';
import { DataResponse } from '../../../shared/response/data.response';
import { DateHelper } from '../../../shared/util/date-helper';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-restore-history',
  templateUrl: './restore-history.component.html',
  styleUrls: ['restore-history.component.css']
})
export class RestoreHistoryComponent implements OnInit {

  lastRestore: RestoreHistory;
  dateHelper = DateHelper;

  displayedColumns = ['filename', 'dumpDate', 'status', 'executionTime', 'clearDB', 'moreInfo'];
  dataSource: RestoreHistory[];

  constructor(private titleService: Title,
              private restoreHistoryService: RestoreHistoryService) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Restore history');
    this.lastRestore = new RestoreHistory();
    this.dataSource = [];
    this.initData();
  }

  initData(): void {
    this.restoreHistoryService.getRestoreHistories(0, 10)
      .subscribe(
        (baseResponse: BaseResponse) => {
          if (baseResponse.status == ResponseStatus.OK) {
            let dataResponse = baseResponse as DataResponse<RestoreHistoryContainer>;
            this.lastRestore = dataResponse.response.lastRestore;
            this.dataSource = dataResponse.response.restores;
            console.log(dataResponse);
          } else {
            console.log((baseResponse as ErrorResponse).errorInfo);
          }
        }
      );
  }


}
