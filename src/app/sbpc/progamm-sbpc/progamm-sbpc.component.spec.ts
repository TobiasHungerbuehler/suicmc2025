import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgammSbpcComponent } from './progamm-sbpc.component';

describe('ProgammSbpcComponent', () => {
  let component: ProgammSbpcComponent;
  let fixture: ComponentFixture<ProgammSbpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgammSbpcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgammSbpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
