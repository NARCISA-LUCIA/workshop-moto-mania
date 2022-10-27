
import { EventService } from './../../service/event-service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Event } from './../../model/event';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  formControlGroup: FormGroup = this.formBuilder.group({
    id: new FormControl(''),
    name: new FormControl(''),
    date: new FormControl(''),
    location: new FormControl(''),
    organizer: new FormControl('')
  });

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService,
    private location: Location,
  ) {}

  ngOnInit(): void { }
  
  createEvent() {
    console.log("Form create: ", this.formControlGroup.getRawValue());
    let event: Event = new Event();
    // event.id = this.formControlGroup.controls['id'].value;
    event.name = this.formControlGroup.controls['name'].value;
    event.date = this.formControlGroup.controls['date'].value;
    event.location = this.formControlGroup.controls['location'].value;
    event.organizer = this.formControlGroup.controls['organizer'].value;
    this.eventService.create(event).subscribe((result: Event) => {
      if (result) {
        console.log("create event: ", result);
      }
    });
  }

  goBack(): void{
    this.location.back();
  }
}
