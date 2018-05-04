import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccountService } from '../../services/account.service';
import { BaseResponse } from '../../../shared/response/base.response';
import { ResponseStatus } from '../../../shared/response/model/response-status.model';
import { ErrorResponse } from '../../../shared/response/error.response';
import { DataResponse } from '../../../shared/response/data.response';
import { AccountsContainer } from '../../dto/accounts-container';
import { Account } from '../../domain/account';
import { AuthService } from '../../services/auth.service';
import { MatPaginator } from '@angular/material';
import { DateHelper } from '../../../shared/util/date-helper';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['users.component.css']
})
export class UsersComponent implements OnInit {

  dateHelper = DateHelper;

  dataSource: Account[];
  total: number;
  pageSize: number;
  displayedColumns = ['email', 'regDate', 'verifiedEmail', 'roles', 'edit'];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private titleService: Title,
              private authService: AuthService,
              private accountService: AccountService) {
  }

  public ngOnInit() {
    this.authService.checkLogin();
    this.titleService.setTitle('Users');
    this.pageSize = 5;
    this.initData();
  }

  initData(): void {
    this.accountService.getAccounts(0, this.pageSize)
      .subscribe(
        (baseResponse: BaseResponse) => {
          if (baseResponse.status == ResponseStatus.OK) {
            let dataResponse = baseResponse as DataResponse<AccountsContainer>;
            this.total = dataResponse.response.total;
            this.dataSource = dataResponse.response.accounts;
            console.log(this.dataSource);
          } else {
            console.log((baseResponse as ErrorResponse).errorInfo);
          }
        }
      )
  }

  editUser(id: number): void {

  }

}
