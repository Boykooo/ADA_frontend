import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DumpService } from '../../services/dump.service';
import { BaseResponse } from '../../../shared/response/base.response';
import { ResponseStatus } from '../../../shared/response/model/response-status.model';
import { ErrorResponse } from '../../../shared/response/error.response';
import { DataResponse } from '../../../shared/response/data.response';
import { RestoreParams } from '../../dto/restore-params';

@Component({
  selector: 'app-dumps',
  templateUrl: './dumps.component.html',
  styleUrls: ['dumps.component.css']
})
export class DumpsComponent implements OnInit {

  dumps: string[];
  restoreParams: RestoreParams;

  constructor(private titleService: Title,
              private dumpService: DumpService) {
  }

  public ngOnInit(): void {
    this.titleService.setTitle('Dumps');
    this.dumps = [];
    this.restoreParams = new RestoreParams();
    this.initData();
  }

  public initData(): void {
    this.dumpService.getLocalDumps()
      .subscribe(
        (baseResponse: BaseResponse) => {
          if (baseResponse.status == ResponseStatus.OK) {
            let dataRespose = baseResponse as DataResponse<string[]>;
            this.dumps = dataRespose.response;
          } else {
            console.log((baseResponse as ErrorResponse).errorInfo);
          }
        }
      );
  }

  public restoreDump(): void {
    console.log(this.restoreParams);
    this.dumpService.restore(this.restoreParams).subscribe();
  }

}
