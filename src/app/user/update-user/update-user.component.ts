import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../service/user-service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  formControlGroup: FormGroup = this.formBuilder.group({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    phone:new FormControl('')
  })
  currentUser: User;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void { 
    let userId = this.route.snapshot.params['id'];
    this.userService.get(userId).subscribe((result) => {
      console.log("id update:", result);
      this.currentUser = result;
      this.formControlGroup = this.formBuilder.group({
        firstName: new FormControl(result.firstName),
        lastName: new FormControl(result.lastName),
        address: new FormControl(result.address),
        email: new FormControl(result.email),
        phone: new FormControl(result.phone),
      });
    });
  }
  
  updateUser() {
    console.log("update user = ", this.formControlGroup.getRawValue());
    let user: User = new User();
    user.id = this.currentUser.id;
    user.firstName = this.formControlGroup.controls['firstName'].value;
    user.lastName = this.formControlGroup.controls['lastName'].value;
    user.address = this.formControlGroup.controls['address'].value;
    user.email = this.formControlGroup.controls['email'].value;
    user.phone = this.formControlGroup.controls['phone'].value;

    this.userService.update(user).subscribe((result) => {
      console.log("update result 1 = ", result);
    });
  }

  goBack() {
    this.location.back();
  }
}
