import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeementComponent } from './employeement.component';

describe('EmployeementComponent', () => {
  let component: EmployeementComponent;
  let fixture: ComponentFixture<EmployeementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
