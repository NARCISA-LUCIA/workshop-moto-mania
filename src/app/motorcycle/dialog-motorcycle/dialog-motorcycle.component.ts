import { EditMotorcycleComponent } from './edit-motorcycle/edit-motorcycle.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-motorcycle',
  templateUrl: './dialog-motorcycle.component.html',
  styleUrls: ['./dialog-motorcycle.component.css'],
})
export class DialogMotorcycleComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditMotorcycleComponent>
  ) {}

  ngOnInit(): void {}

  onClose(): void {
    this.dialogRef.close();
  }
}
