import { ActivatedRoute } from '@angular/router';
import { EventService } from './../../service/event-service';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Event } from './../../model/event';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css'],
})
export class UpdateEventComponent implements OnInit {
  currentEvent: Event;
  formControlGroup: FormGroup = this.formBuilder.group({
    id: new FormControl(''),
    name: new FormControl(''),
    date: new FormControl(''),
    location: new FormControl(''),
    organizer: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let eventId = this.route.snapshot.params['id'];
    this.eventService.get(eventId).subscribe((result) => {
      console.log('id update= ', result);
      this.currentEvent = result;
      this.formControlGroup = this.formBuilder.group({
        id: new FormControl(result.id),
        name: new FormControl(result.name),
        date: new FormControl(result.date),
        location: new FormControl(result.location),
        organizer: new FormControl(result.organizer),
      });
    });
  }

  updateEvent() {
    console.log('update event =', this.formControlGroup.getRawValue());
    let event: Event = new Event();
    event.id = this.currentEvent.id;
    event.name = this.formControlGroup.controls['name'].value;
    event.date = this.formControlGroup.controls['date'].value;
    event.location = this.formControlGroup.controls['location'].value;
    event.organizer = this.formControlGroup.controls['organizer'].value;

    this.eventService.update(event).subscribe((result) => {
      console.log('update result =', result);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
