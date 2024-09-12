import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuicmcComponent } from './suicmc.component';

describe('SuicmcComponent', () => {
  let component: SuicmcComponent;
  let fixture: ComponentFixture<SuicmcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuicmcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuicmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
