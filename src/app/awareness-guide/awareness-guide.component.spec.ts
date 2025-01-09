import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwarenessGuideComponent } from './awareness-guide.component';

describe('AwarenessGuideComponent', () => {
  let component: AwarenessGuideComponent;
  let fixture: ComponentFixture<AwarenessGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwarenessGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwarenessGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
