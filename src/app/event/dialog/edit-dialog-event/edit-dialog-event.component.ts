import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-dialog-event',
  templateUrl: './edit-dialog-event.component.html',
  styleUrls: ['./edit-dialog-event.component.css'],
})
export class EditDialogEventComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<EditDialogEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onClose(): void {
    this.dialogRef.close();
    console.log('edit dialog closed');
  }
}
