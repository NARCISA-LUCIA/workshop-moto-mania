import { Motorcycle } from './../../model/motorcycle';
import { MotorcycleService } from './../../service/motorcycle-service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-motorcycle',
  templateUrl: './create-motorcycle.component.html',
  styleUrls: ['./create-motorcycle.component.css']
})
export class CreateMotorcycleComponent implements OnInit {
  formControlGroup: FormGroup = this.formBuilder.group({
    id: new FormControl(''),
    brand: new FormControl(''),
    model: new FormControl(''),
    color: new FormControl(''),
    engineCapacity: new FormControl(''),
    enginePower: new FormControl(''),
    fabricationYear: new FormControl('')
  });

  constructor(
    private formBuilder: FormBuilder,
    private motoService: MotorcycleService,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  createMotorcycle() {
    console.log('Form =', this.formControlGroup.getRawValue());
    let motorcycle: Motorcycle = new Motorcycle();
    motorcycle.id = this.formControlGroup.controls['id'].value;
    motorcycle.brand = this.formControlGroup.controls['brand'].value;
    motorcycle.model = this.formControlGroup.controls['model'].value;
    motorcycle.color = this.formControlGroup.controls['color'].value;
    motorcycle.engineCapacity = this.formControlGroup.controls['engineCapacity'].value;
    motorcycle.enginePower = this.formControlGroup.controls['enginePower'].value;
    motorcycle.fabricationYear = this.formControlGroup.controls['fabricationYear'].value;
    this.motoService.create(motorcycle).subscribe((result: Motorcycle) => {
      if (result) {
        console.log('result = ', result);
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
  
}
