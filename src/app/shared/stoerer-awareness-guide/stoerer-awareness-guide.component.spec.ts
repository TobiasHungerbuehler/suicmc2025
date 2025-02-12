import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoererAwarenessGuideComponent } from './stoerer-awareness-guide.component';

describe('StoererAwarenessGuideComponent', () => {
  let component: StoererAwarenessGuideComponent;
  let fixture: ComponentFixture<StoererAwarenessGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoererAwarenessGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoererAwarenessGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
