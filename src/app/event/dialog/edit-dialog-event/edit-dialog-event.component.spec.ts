import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDialogEventComponent } from './edit-dialog-event.component';

describe('EditDialogEventComponent', () => {
  let component: EditDialogEventComponent;
  let fixture: ComponentFixture<EditDialogEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDialogEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDialogEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
