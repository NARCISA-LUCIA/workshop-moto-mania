import { FormBuilder, FormControl } from '@angular/forms';
import { RemoveDialogEventComponent } from './dialog/remove-dialog-event/remove-dialog-event.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EventService } from './../service/event-service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Event } from './../model/event';
import { EditDialogEventComponent } from './dialog/edit-dialog-event/edit-dialog-event.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  displayedColumns: string[] = [
    'number',
    'name',
    'date',
    'location',
    'organizer',
    'edit',
    'remove',
  ];

  event: Event[] = [];
  dataSource: MatTableDataSource<Event>;

  constructor(
    private eventService: EventService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents(): void {
    this.eventService.getAll().subscribe((result) => {
      console.log('event by id:' + result);
      if (result != null && result != undefined) {
        this.dataSource = new MatTableDataSource<Event>(result);
      }
    });
  }

  openDialog(tableElement: Event): void {
    const name = tableElement.name;
    const dialogRef = this.dialog.open(RemoveDialogEventComponent, {
      data: { name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('dialog remove closed');
      if (result != null) {
        this.eventService.delete(tableElement.id).subscribe(
          () => {
            console.log('event was removed');
            const index = this.dataSource.data.findIndex(
              (arrayElement) => arrayElement.id === tableElement.id
            ); //cauta pozitia elementului in tabel
            this.dataSource.data.splice(index, 1);
            this.dataSource._updateChangeSubscription();
          },
          () => console.log('event was not removed')
        );
      }
    });
  }

  openEditEvent(event: Event): void {
    const formControlGroup = this.formBuilder.group({
      name: new FormControl(event.name),
      date: new FormControl(event.date),
    });
    const dialogRef = this.dialog.open(EditDialogEventComponent, {
      data: { formControlGroup },
    });

    dialogRef.afterClosed().subscribe((data) => {
      console.log('edit event closeddddd');
      if (data != null) {
        event.name = data.formControlGroup.controls['name'].value;
        event.date = data.formControlGroup.controls['date'].value;

        this.eventService.update(event).subscribe(
          () => {
            console.log('event was updated');
          },
          () => {
            console.log('event was not updated');
          }
        );
      }
    });
  }
}
