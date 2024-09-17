import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasIstComponent } from './was-ist.component';

describe('WasIstComponent', () => {
  let component: WasIstComponent;
  let fixture: ComponentFixture<WasIstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WasIstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WasIstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
