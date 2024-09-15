import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreEcmcComponent } from './pre-ecmc.component';

describe('PreEcmcComponent', () => {
  let component: PreEcmcComponent;
  let fixture: ComponentFixture<PreEcmcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreEcmcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreEcmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
