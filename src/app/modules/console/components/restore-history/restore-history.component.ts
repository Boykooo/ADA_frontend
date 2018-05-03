import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RestoreHistoryService } from '../../services/restore-history.service';
import { BaseResponse } from '../../../shared/response/base.response';
import { ResponseStatus } from '../../../shared/response/model/response-status.model';
import { RestoreHistory } from '../../domain/restore-history';
import { ErrorResponse } from '../../../shared/response/error.response';
import { RestoreHistoryContainer } from '../../dto/restore-history-container';
import { DataResponse } from '../../../shared/response/data.response';
import { DateHelper } from '../../../shared/util/date-helper';
import { MatPaginator, PageEvent } from '@angular/material';
import { AuthService } from '../../services/auth.service';

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
  countObjects: number;
  pageSize: number = 5;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private titleService: Title,
              private restoreHistoryService: RestoreHistoryService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.checkLogin();
    this.titleService.setTitle('Restore history');
    this.lastRestore = new RestoreHistory();
    this.dataSource = [];
    this.initData();
  }

  private initData(): void {
    this.restoreHistoryService.getRestoreHistories(0, this.pageSize).subscribe(response => this.handleRestoreHistoriesResponse(response));
  }

  public ngAfterViewInit() {
    this.paginator.page
      .subscribe(
        (pageEvent: PageEvent) => {
          this.restoreHistoryService.getRestoreHistories(pageEvent.pageIndex, pageEvent.pageSize)
            .subscribe(response => this.handleRestoreHistoriesResponse(response))
        }
      )
  }

  private handleRestoreHistoriesResponse(baseResponse: BaseResponse): void {
    if (baseResponse.status == ResponseStatus.OK) {
      let dataResponse = baseResponse as DataResponse<RestoreHistoryContainer>;
      this.lastRestore = dataResponse.response.lastRestore;
      this.dataSource = dataResponse.response.restores;
      this.countObjects = dataResponse.response.total;
      console.log(dataResponse);
    } else {
      console.log((baseResponse as ErrorResponse).errorInfo);
    }
  }

}
