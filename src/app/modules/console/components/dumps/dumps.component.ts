import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DumpService } from '../../services/dump.service';
import { BaseResponse } from '../../../shared/response/base.response';
import { ResponseStatus } from '../../../shared/response/model/response-status.model';
import { ErrorResponse } from '../../../shared/response/error.response';
import { DataResponse } from '../../../shared/response/data.response';
import { RestoreParams } from '../../dto/restore-params';
import { AuthService } from '../../services/auth.service';

import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import { environment } from '../../../../../environments/environment';
import { RestoreProcess } from '../../dto/restore-process';
import { OsmEntityType } from '../../dto/osm-entity-type';

@Component({
  selector: 'app-dumps',
  templateUrl: './dumps.component.html',
  styleUrls: ['dumps.component.css']
})
export class DumpsComponent implements OnInit {

  private stompClient;

  dumps: string[];
  restoreParams: RestoreParams;
  restoreProcess: RestoreProcess;
  osmEntityType = OsmEntityType;

  constructor(private titleService: Title,
              private dumpService: DumpService,
              private authService: AuthService) {
  }

  public ngOnInit(): void {
    this.authService.checkLogin();
    this.titleService.setTitle('Dumps');
    this.dumps = [];
    this.restoreParams = new RestoreParams();
    this.initData();
    this.initSocketConnection();
  }

  public initData(): void {
    console.log(Object.values(OsmEntityType));
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

  public initSocketConnection(): void {
    let ws = new SockJS(environment.geoSocketUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function (frame) {
      that.stompClient.subscribe('/topic/restore-status', (message) => {
        that.restoreProcess = new RestoreProcess(JSON.parse(message.body));
        console.log(that.restoreProcess);
      });
    });
  }

  public restoreDump(): void {
    console.log(this.restoreParams);
    this.dumpService.restore(this.restoreParams).subscribe();
  }

  sendThroughSocket(): void {
    this.stompClient.send('/send/hello');
  }

}
