import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoererKontaktComponent } from './stoerer-kontakt.component';

describe('StoererKontaktComponent', () => {
  let component: StoererKontaktComponent;
  let fixture: ComponentFixture<StoererKontaktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoererKontaktComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoererKontaktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
