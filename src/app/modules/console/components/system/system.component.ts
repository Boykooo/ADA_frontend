import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['system.component.css']
})
export class SystemComponent implements OnInit {

  constructor(private authService: AuthService,
              private titleService: Title) {
  }

  ngOnInit(): void {
    this.authService.checkLogin();
    this.titleService.setTitle('System');
  }

}
