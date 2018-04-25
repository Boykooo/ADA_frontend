import { Component, OnInit } from '@angular/core';
import { ExceptionService } from '../../services/exception.service';
import { ErrorInfo } from '../../../shared/response/model/error-info.model';

@Component({
  selector: 'app-exception',
  templateUrl: './exception.component.html',
  styleUrls: ['./exception.component.css']
})
export class ExceptionComponent implements OnInit {

  errorInfo: ErrorInfo;

  constructor(private exceptionService: ExceptionService) {
  }
w
  public ngOnInit(): void {
    this.errorInfo = this.exceptionService.errorInfo;
  }

}
