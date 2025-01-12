import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSbpcComponent } from './registration-sbpc.component';

describe('RegistrationSbpcComponent', () => {
  let component: RegistrationSbpcComponent;
  let fixture: ComponentFixture<RegistrationSbpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationSbpcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationSbpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
