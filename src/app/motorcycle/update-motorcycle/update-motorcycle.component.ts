import { Motorcycle } from './../../model/motorcycle';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MotorcycleService } from './../../service/motorcycle-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-motorcycle',
  templateUrl: './update-motorcycle.component.html',
  styleUrls: ['./update-motorcycle.component.css'],
})
export class UpdateMotorcycleComponent implements OnInit {
  currentMotorcycle: Motorcycle;
  formControlGroup: FormGroup = this.FormBuilder.group({
    id: new FormControl(''),
    brand: new FormControl(''),
    model: new FormControl(''),
  });

  constructor(
    private FormBuilder: FormBuilder,
    private motoService: MotorcycleService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    let motorcycleId = this.route.snapshot.params['id'];
    console.log('motorcycleId' + motorcycleId);
    this.motoService.get(motorcycleId).subscribe((result) => {
      console.log(result);
      this.currentMotorcycle = result;
      this.formControlGroup = this.FormBuilder.group({
        id: new FormControl(result.id),
        brand: new FormControl(result.brand),
        model: new FormControl(result.model),
      });
    });
  }

  updateMotorcycle() {
    console.log('Form = ', this.formControlGroup.getRawValue());
    let motorcycle: Motorcycle = new Motorcycle();
    motorcycle.id = this.currentMotorcycle.id;
    motorcycle.brand = this.formControlGroup.controls['brand'].value;
    motorcycle.model = this.formControlGroup.controls['model'].value;

    this.motoService.update(motorcycle).subscribe((result) => {
      console.log('update:' + result);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
