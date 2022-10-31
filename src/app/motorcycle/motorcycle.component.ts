import { EditMotorcycleComponent } from './dialog-motorcycle/edit-motorcycle/edit-motorcycle.component';
import { UpdateMotorcycleComponent } from './update-motorcycle/update-motorcycle.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DialogMotorcycleComponent } from './dialog-motorcycle/dialog-motorcycle/dialog-motorcycle.component';

import { MotorcycleService } from './../service/motorcycle-service';
import { Motorcycle } from '../model/motorcycle';
import { MatTableDataSource } from '@angular/material/table';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-motorcycle',
  templateUrl: './motorcycle.component.html',
  styleUrls: ['./motorcycle.component.css'],
})
export class MotorcycleComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'brand',
    'model',
    'color',
    'engineCapacity',
    'enginePower',
    'fabricationYear',
    'edit',
    'remove',
  ];
  motorcycle: Motorcycle[] = [];
  dataSource: MatTableDataSource<Motorcycle>;

  constructor(
    private motoService: MotorcycleService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getMotorcycles();
  }

  getMotorcycles(): void {
    this.motoService.getAllMotorcycle().subscribe((result) => {
      console.log(result);
      if (result != null && result != undefined) {
        this.dataSource = new MatTableDataSource<Motorcycle>(result);
      }
    });
  }

  openDialog(motorcycle: Motorcycle): void {
    //  console.log("something ?" + motorcycle.brand);
    const dialogRef: MatDialogRef<DialogMotorcycleComponent, any> =
      this.dialog.open(DialogMotorcycleComponent, {
        data: { motorcycle },
      });
    console.log(motorcycle.brand);

    dialogRef.afterClosed().subscribe((data) => {
      console.log('the modal is closed!');
      if (data != null && data != undefined) {
        this.deleteMotorcycle(data.motorcycle);
      }
    });
  }

  openDialogEdit(motorcycle: Motorcycle): void {
    const formControlGroup = this.formBuilder.group({
      id: new FormControl(motorcycle.id),
      brand: new FormControl(motorcycle.brand),
      model: new FormControl(motorcycle.model),
    });
    const dialogRef = this.dialog.open(EditMotorcycleComponent, {
      data: {
        formControlGroup,
      },
    });

    dialogRef.afterClosed().subscribe((data) => {
      console.log(' Update closed ');
      if (data != null) {
        motorcycle.id = data.formControlGroup.controls['id'].value;
        motorcycle.brand = data.formControlGroup.controls['brand'].value;
        motorcycle.model = data.formControlGroup.controls['model'].value;
        this.motoService.update(motorcycle).subscribe(
          () => {
            console.log('Motorcycle was updated');
          },
          () => console.log('Motorcycle was not updated')
        );
      }
    });
  }

  deleteMotorcycle(motorcycle: Motorcycle): void {
    this.motoService.delete(motorcycle.id).subscribe(() => {
      console.log('the moto is deleted!');
    });
  }
}
