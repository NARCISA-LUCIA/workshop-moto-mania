import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMotorcycleComponent } from './create-motorcycle.component';

describe('CreateMotorcycleComponent', () => {
  let component: CreateMotorcycleComponent;
  let fixture: ComponentFixture<CreateMotorcycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMotorcycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMotorcycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
