import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSuicmcComponent } from './registration-suicmc.component';

describe('RegistrationSuicmcComponent', () => {
  let component: RegistrationSuicmcComponent;
  let fixture: ComponentFixture<RegistrationSuicmcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationSuicmcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationSuicmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
