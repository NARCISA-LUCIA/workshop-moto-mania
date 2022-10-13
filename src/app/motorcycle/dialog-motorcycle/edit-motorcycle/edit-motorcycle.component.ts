import { Motorcycle } from './../../../model/motorcycle';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-motorcycle',
  templateUrl: './edit-motorcycle.component.html',
  styleUrls: ['./edit-motorcycle.component.css'],
})
export class EditMotorcycleComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<EditMotorcycleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private location: Location
  ) {}

  ngOnInit(): void {
   }

  onClose(): void {
    this.dialogRef.close();
    console.log('editBack is not working');
  }
}
