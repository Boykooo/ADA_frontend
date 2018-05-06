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
import { MatDialog, MatPaginator, PageEvent } from '@angular/material';
import { DateHelper } from '../../../shared/util/date-helper';
import { NewUserDialogComponent } from './dialogs/new-user/new-user-dialog.component';
import { DeleteUserDialogComponent } from './dialogs/delete-user/delete-user-dialog.component';
import { Router } from '@angular/router';

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
              private accountService: AccountService,
              private dialog: MatDialog,
              private router: Router) {
  }

  public ngOnInit() {
    this.authService.checkLogin();
    this.titleService.setTitle('Users');
    this.pageSize = 5;
    this.initData();
  }

  public ngAfterViewInit(): void {
    this.paginator.page
      .subscribe(
        (pageEvent: PageEvent) => this.handleAccountsPageEvent(pageEvent.pageIndex, pageEvent.pageSize));
  }

  initData(): void {
    this.accountService.getAccounts(0, this.pageSize)
      .subscribe(baseResponse => this.handleAccountsPageResponse(baseResponse));
  }

  private handleAccountsPageEvent(page: number, size: number): void {
    this.accountService.getAccounts(page, size)
      .subscribe(baseResponse => this.handleAccountsPageResponse(baseResponse));
  }

  private handleAccountsPageResponse(baseResponse: BaseResponse) {
    if (baseResponse.status == ResponseStatus.OK) {
      let dataResponse = baseResponse as DataResponse<AccountsContainer>;
      this.total = dataResponse.response.total;
      this.dataSource = dataResponse.response.accounts;
    } else {
      console.log((baseResponse as ErrorResponse).errorInfo);
    }
  }

  editUser(id: number): void {
    this.router.navigate(['/users', id]);
  }

  showCreateUserDialog(): void {
    this.dialog.open(NewUserDialogComponent, {
      width: '400px'
    }).afterClosed()
      .subscribe(
        result => {
          this.handleAccountsPageEvent(this.paginator.pageIndex, this.paginator.pageSize);
        }
      );
  }

  showDeleteUserDialog(id: number): void {
    this.dialog.open(DeleteUserDialogComponent, {
      width: '300px'
    }).afterClosed()
      .subscribe(
        result => {
          if (result === 'confirm') {
            this.deleteUser(id);
          }
        }
      );
  }

  deleteUser(id: number): void {
    this.accountService.deleteAccount(id)
      .subscribe(
        baseResponse => {
          if (baseResponse.status == ResponseStatus.OK) {
            this.handleAccountsPageEvent(this.paginator.pageIndex, this.paginator.pageSize);
          } else {
            console.log((baseResponse as ErrorResponse).errorInfo);
          }
        }
      );
  }
}



