import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacemapComponent } from './racemap.component';

describe('RacemapComponent', () => {
  let component: RacemapComponent;
  let fixture: ComponentFixture<RacemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacemapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RacemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
