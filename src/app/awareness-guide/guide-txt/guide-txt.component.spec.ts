import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideTxtComponent } from './guide-txt.component';

describe('GuideTxtComponent', () => {
  let component: GuideTxtComponent;
  let fixture: ComponentFixture<GuideTxtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuideTxtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuideTxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
