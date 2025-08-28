import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelferComponent } from './helfer.component';

describe('HelferComponent', () => {
  let component: HelferComponent;
  let fixture: ComponentFixture<HelferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
