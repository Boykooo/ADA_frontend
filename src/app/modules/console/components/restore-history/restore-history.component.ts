import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RestoreHistoryService } from '../../services/restore-history.service';

@Component({
  selector: 'app-restore-history',
  templateUrl: './restore-history.component.html',
  styleUrls: ['restore-history.component.css']
})
export class RestoreHistoryComponent implements OnInit {



  constructor(private titleService: Title,
              private restoreHistoryService: RestoreHistoryService) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Restore history');
  }

  test(): void {
    this.restoreHistoryService.getRestoreHistories(0, 10);
  }

}
