import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammPreEcmcComponent } from './programm-pre-ecmc.component';

describe('ProgrammPreEcmcComponent', () => {
  let component: ProgrammPreEcmcComponent;
  let fixture: ComponentFixture<ProgrammPreEcmcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammPreEcmcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammPreEcmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
