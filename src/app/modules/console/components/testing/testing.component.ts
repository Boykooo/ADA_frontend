import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor(private authService: AuthService,
              private titleService: Title) {
  }

  ngOnInit() {
    this.authService.checkLogin();
    this.titleService.setTitle('Testing');
  }

}
