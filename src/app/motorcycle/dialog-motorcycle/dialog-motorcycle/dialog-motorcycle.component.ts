
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-motorcycle',
  templateUrl: './dialog-motorcycle.component.html',
  styleUrls: ['./dialog-motorcycle.component.css'],
})
export class DialogMotorcycleComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogMotorcycleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onClose(): void {
    this.dialogRef.close();
  }
}
