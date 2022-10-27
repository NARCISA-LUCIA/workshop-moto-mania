import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveDialogEventComponent } from './remove-dialog-event.component';

describe('RemoveDialogEventComponent', () => {
  let component: RemoveDialogEventComponent;
  let fixture: ComponentFixture<RemoveDialogEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveDialogEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveDialogEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
