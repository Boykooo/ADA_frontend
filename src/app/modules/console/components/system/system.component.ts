import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Title } from '@angular/platform-browser';
import { RestoreProcess } from '../../dto/restore-process';
import { environment } from '../../../../../environments/environment';

import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['system.component.css']
})
export class SystemComponent implements OnInit {

  private stompClient;

  constructor(private authService: AuthService,
              private titleService: Title) {
  }

  ngOnInit(): void {
    this.authService.checkLogin();
    this.titleService.setTitle('System');
    this.initSocketConnection();
  }

  public initSocketConnection(): void {
    let ws = new SockJS(environment.geoSocketUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function (frame) {
      that.stompClient.subscribe('/topic/system-info', (message) => {
        console.log(message.body);
      });
    });
  }

}
