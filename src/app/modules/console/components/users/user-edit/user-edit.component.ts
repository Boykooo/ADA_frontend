import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Title } from '@angular/platform-browser';
import { AccountService } from '../../../services/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../../../domain/account';
import { ResponseStatus } from '../../../../shared/response/model/response-status.model';
import { ErrorResponse } from '../../../../shared/response/error.response';
import { DataResponse } from '../../../../shared/response/data.response';
import { Role } from '../../../domain/role';
import { AccountDto } from '../../../dto/account-dto';
import { RoleService } from '../../../services/role.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  accountDto: AccountDto;
  roles: Role[];
  newPassword: string;
  verifyNewPassword: string;

  constructor(private authService: AuthService,
              private titleService: Title,
              private accountService: AccountService,
              private route: ActivatedRoute,
              private roleService: RoleService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.authService.checkLogin();
    this.titleService.setTitle('User edit');
    this.accountDto = new AccountDto();
    this.initData();
  }

  private initData(): void {
    this.route.paramMap
      .subscribe(
        paramMap => {
          this.accountService.getAccount(paramMap.get('id'))
            .subscribe(
              baseResponse => {
                if (baseResponse.status == ResponseStatus.OK) {
                  let account = (baseResponse as DataResponse<Account>).response;
                  this.accountDto.email = account.email;
                  this.accountDto.id = account.id;
                  this.accountDto.roleIds = account.roles.map(role => role.id);
                  console.log(this.accountDto);
                } else {
                  console.log((baseResponse as ErrorResponse).errorInfo);
                }
              }
            );
        }
      );

    this.roleService.getAllRoles()
      .subscribe(
        baseResponse => {
          this.roles = (baseResponse as DataResponse<Role[]>).response;
        }
      );
  }

  updateUser(): void {
    if (this.newPassword && this.verifyNewPassword && this.newPassword === this.verifyNewPassword) {
      this.accountDto.password = this.newPassword;
    }
    this.accountService.updateAccount(this.accountDto)
      .subscribe();

    this.router.navigate(['/users']);
  }
}
