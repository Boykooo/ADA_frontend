import { MatDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-user-dialog',
  templateUrl: './delete-user-dialog.component.html',
  styleUrls: ['./delete-user-dialog.component.css']
})
export class DeleteUserDialogComponent {

  constructor(private dialog: MatDialogRef<DeleteUserDialogComponent>) {
  }

  public confirm(): void {
    this.dialog.close(
      'confirm'
    );
  }

  public cancel(): void {
    this.dialog.close(
      'cancel'
    );
  }

}
