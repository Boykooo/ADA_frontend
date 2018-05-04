import { Component, OnInit } from '@angular/core';
import { ResponseStatus } from '../../../../../shared/response/model/response-status.model';
import { ErrorResponse } from '../../../../../shared/response/error.response';
import { MatDialogRef } from '@angular/material';
import { RoleService } from '../../../../services/role.service';
import { Role } from '../../../../domain/role';
import { DataResponse } from '../../../../../shared/response/data.response';
import { AccountDto } from '../../../../dto/account-dto';
import { AccountService } from '../../../../services/account.service';
import { DeleteUserDialogComponent } from '../delete-user/delete-user-dialog.component';

@Component({
  selector: 'app-new-user-dialog',
  templateUrl: './new-user-dialog.component.html',
  styleUrls: ['new-user-dialog.component.css']
})
export class NewUserDialogComponent implements OnInit {

  roles: Role[];

  accountDto: AccountDto;
  error: string;

  constructor(private accountService: AccountService,
              private newUserDialog: MatDialogRef<NewUserDialogComponent>,
              private roleService: RoleService) {
  }

  ngOnInit(): void {
    this.accountDto = new AccountDto();
    this.initData();
  }

  initData(): void {
    this.roleService.getAllRoles()
      .subscribe(
        baseResponse => {
          if  (baseResponse.status == ResponseStatus.OK) {
            let dataResponse = baseResponse as DataResponse<Role[]>;
            this.roles = dataResponse.response;
          } else {
            console.log((baseResponse as ErrorResponse).errorInfo);
          }
        }
      );
  }

  createUser(): void {
    this.accountService.createAccount(this.accountDto)
      .subscribe(
        baseResponse => {
          if (baseResponse.status == ResponseStatus.OK) {
            this.newUserDialog.close();
          } else {
            this.error = (baseResponse as ErrorResponse).errorInfo.message;
          }
        }
      )
  }

}
