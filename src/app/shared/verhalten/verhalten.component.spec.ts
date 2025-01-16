import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerhaltenComponent } from './verhalten.component';

describe('VerhaltenComponent', () => {
  let component: VerhaltenComponent;
  let fixture: ComponentFixture<VerhaltenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerhaltenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerhaltenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
