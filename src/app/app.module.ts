
import { MatDialogModule} from '@angular/material/dialog';
import { MotorcycleService } from './service/motorcycle-service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MotorcycleComponent } from './motorcycle/motorcycle.component';
import { MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { DialogMotorcycleComponent } from './motorcycle/dialog-motorcycle/dialog-motorcycle.component';
import { CreateMotorcycleComponent } from './motorcycle/create-motorcycle/create-motorcycle.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { UpdateMotorcycleComponent } from './motorcycle/update-motorcycle/update-motorcycle.component';
import { EditMotorcycleComponent } from './motorcycle/dialog-motorcycle/edit-motorcycle/edit-motorcycle.component';

@NgModule({
  declarations: [
    AppComponent,
    MotorcycleComponent,
    DialogMotorcycleComponent,
    CreateMotorcycleComponent,
    UpdateMotorcycleComponent,
    EditMotorcycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule,
    MatTooltipModule,
    MatDialogModule,
    MatButtonModule,
    MatSortModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [HttpClient, MotorcycleService, Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
