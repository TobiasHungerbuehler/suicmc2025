import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossarComponent } from './glossar.component';

describe('GlossarComponent', () => {
  let component: GlossarComponent;
  let fixture: ComponentFixture<GlossarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlossarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlossarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
