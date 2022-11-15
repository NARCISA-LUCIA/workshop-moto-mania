import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-remove-dialog-event',
  templateUrl: './remove-dialog-event.component.html',
  styleUrls: ['./remove-dialog-event.component.css'],
})
export class RemoveDialogEventComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<RemoveDialogEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onClose(): void {
    this.dialogRef.close();
  }
}
