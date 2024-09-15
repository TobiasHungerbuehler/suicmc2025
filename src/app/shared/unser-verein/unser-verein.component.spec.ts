import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnserVereinComponent } from './unser-verein.component';

describe('UnserVereinComponent', () => {
  let component: UnserVereinComponent;
  let fixture: ComponentFixture<UnserVereinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnserVereinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnserVereinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
