import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Title } from '@angular/platform-browser';
import { environment } from '../../../../../environments/environment';

import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import { SystemInfoStorage } from '../../dto/system-info-storage';
import { DateHelper } from '../../../shared/util/date-helper';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['system.component.css']
})
export class SystemComponent implements OnInit {

  //for CPU chart
  public cpuChartOptions: any = {
    responsive: false,
    animation: false,
    scales: {
      yAxes: [{
        display: true,
        ticks: {
          suggestedMax: 100,
          suggestedMin: 0
        }
      }]
    }
  };
  public cpuChartColor: Array<any> = [
    { // dark grey
      backgroundColor: 'rgba(55, 90, 204, 0.3)',
      borderColor: 'rgba(110, 132, 204,1)',
      pointBackgroundColor: 'rgba(55, 90, 204, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend: boolean = false;
  public lineChartType: string = 'line';
  public cpuChartData: Array<any> = [{ data: [], label: [] }];
  public cpuLabels: Array<any> = [];

  //For Memory chart
  public memoryChartOptions: any = {
    responsive: false,
    animation: false,
    scales: {
      yAxes: [{
        display: true,
        ticks: {
          suggestedMax: 16000
        }
      }]
    }
  };

  public memoryChartData: Array<any> = [{ data: [], label: [] }];
  public memoryLabels: Array<any> = [];

  private stompClient;
  private systemInfo: SystemInfoStorage;



  constructor(private authService: AuthService,
              private titleService: Title) {
  }

  ngOnInit(): void {
    this.authService.checkLogin();
    this.titleService.setTitle('System');
    this.systemInfo = new SystemInfoStorage();
    this.initSocketConnection();
    console.log(this.cpuChartData);
  }

  public initSocketConnection(): void {
    let ws = new SockJS(environment.geoSocketUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function (frame) {
      that.stompClient.subscribe('/topic/system-info', (message) => {
        that.systemInfo = JSON.parse(message.body);
        that.processSystemInfoResponse();
      });
    });
  }

  private processSystemInfoResponse(): void {
    let cpu = this.systemInfo.cpu;
    this.cpuChartData = [{ data: cpu.map(x => x.item), label: 'Load' }];
    this.cpuLabels.length = 0;
    cpu.forEach(x => this.cpuLabels.push(DateHelper.toTime(x.time)));

    let memory = this.systemInfo.memory;
    this.memoryChartData = [{ data: memory.map(x => x.item), label: 'Load' }];
    this.memoryLabels.length = 0;
    memory.forEach(x => this.memoryLabels.push(DateHelper.toTime(x.time)));

  }

}
