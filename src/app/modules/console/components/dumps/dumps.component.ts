import { Component, OnInit } from '@angular/core';
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
import apply = Reflect.apply;
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-dumps',
  templateUrl: './dumps.component.html',
  styleUrls: ['dumps.component.css']
})
export class DumpsComponent implements OnInit {

  private stompClient;

  dumps: string[];
  restoreParams: RestoreParams;
  socketResponse: any;

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
    this.socketResponse = 'null';
    this.initSocketConnection();
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

  public initSocketConnection(): void {
    let ws = new SockJS(environment.geoSocketUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function (frame) {
      that.stompClient.subscribe('/topic/restore-status', (message) => {
        console.log('getting ' + message);
        that.socketResponse = message.body;
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
