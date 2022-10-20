import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMotorcycleComponent } from './dialog-motorcycle.component';

describe('DialogMotorcycleComponent', () => {
  let component: DialogMotorcycleComponent;
  let fixture: ComponentFixture<DialogMotorcycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMotorcycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMotorcycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
