import { Location } from '@angular/common';
import { UserService } from './../../service/user-service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  formControlGroup: FormGroup = this.formBuilder.group({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private location: Location,
  ) {}

  ngOnInit(): void { }
  
  createUser() {
    console.log("create form = ", this.formControlGroup.getRawValue());
    let user: User = new User();
    user.firstName = this.formControlGroup.controls['firstName'].value;
    user.lastName = this.formControlGroup.controls['lastName'].value;
    user.address = this.formControlGroup.controls['address'].value;
    user.email = this.formControlGroup.controls['email'].value;
    user.phone = this.formControlGroup.controls['phone'].value;
    this.userService.create(user).subscribe((result: User) => {
      if (result) {
        console.log("result user ", result);
      }
    });
  }

  goBack(): void{
    this.location.back();
  }
}
