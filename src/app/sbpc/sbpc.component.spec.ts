import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbpcComponent } from './sbpc.component';

describe('SbpcComponent', () => {
  let component: SbpcComponent;
  let fixture: ComponentFixture<SbpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SbpcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
