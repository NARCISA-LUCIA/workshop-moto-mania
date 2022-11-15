import { UpdateEventComponent } from './event/update-event/update-event.component';
import { CreateEventComponent } from './event/create-event/create-event.component';
import { EventComponent } from './event/event.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { UserComponent } from './user/user.component';
import { EditMotorcycleComponent } from './motorcycle/dialog-motorcycle/edit-motorcycle/edit-motorcycle.component';
import { UpdateMotorcycleComponent } from './motorcycle/update-motorcycle/update-motorcycle.component';
import { CreateMotorcycleComponent } from './motorcycle/create-motorcycle/create-motorcycle.component';
import { MotorcycleComponent } from './motorcycle/motorcycle.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "motorcycle", component: MotorcycleComponent},
  {path: "motorcycle/create", component: CreateMotorcycleComponent},
  {path: "motorcycle/:id/update", component: UpdateMotorcycleComponent},
  {path: "motorcycle/edit", component: EditMotorcycleComponent},
  {path: "user", component: UserComponent },
  {path: "user/create", component: CreateUserComponent },
  {path: "user/:id/update", component: UpdateUserComponent},
  {path: "event", component: EventComponent},
  {path: "event/create", component: CreateEventComponent},
  {path: "event/:id/update", component: UpdateEventComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
