import { EditDialogComponent } from './dialog-user/edit-dialog/edit-dialog.component';
import { RemoveDialogComponent } from './dialog-user/remove-dialog/remove-dialog.component';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from './../service/user-service';
import { User } from './../model/user';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'address',
    'email',
    'phone',
    'edit',
    'remove',
  ];
  user: User[] = [];
  dataSource: MatTableDataSource<User>;
  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getAllUsers(1).subscribe((result) => {
      console.log('get all:' + JSON.stringify(result));
      this.dataSource = new MatTableDataSource<User>(result);
    });
  }

  openDialog(user: User): void {
    console.log('openDialog');
    const firstName = user.firstName;
    const dialogRef = this.dialog.open(RemoveDialogComponent, {
      data: { firstName },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('dialog closed');
      if (result != null) {
        this.userService.delete(user.id).subscribe(
          () => {
            console.log('user was removed');
            const index = this.dataSource.data.findIndex(
              (user) => user.id === user.id
            );
            this.dataSource.data.splice(index, 1);
            this.dataSource._updateChangeSubscription();
          },
          () => console.log('user was not removed')
        );
      }
    });
  }

  openEditUser(user: User): void {
    const formControlGroup = this.formBuilder.group({
      firstName: new FormControl(user.firstName),
      lastName: new FormControl(user.lastName),
      address: new FormControl(user.address),
      email: new FormControl(user.email),
      phone: new FormControl(user.phone),
    });
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: {
        formControlGroup,
      },
    });

    dialogRef.afterClosed().subscribe((data) => {
      console.log('edit closed');
      if (data != null) {
        user.firstName = data.formControlGroup.controls['firstName'].value;
        user.lastName = data.formControlGroup.controls['lastName'].value;
        user.address = data.formControlGroup.controls['address'].value;
        user.email = data.formControlGroup.controls['email'].value;
        user.phone = data.formControlGroup.controls['phone'].value;

        this.userService.update(user).subscribe(
          () => {
            console.log('user was update');
          },
          () => console.log('user was not update')
        );
      }
    });
  }
}
