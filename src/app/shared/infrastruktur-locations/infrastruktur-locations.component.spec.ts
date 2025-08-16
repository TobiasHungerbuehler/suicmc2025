import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfrastrukturLocationsComponent } from './infrastruktur-locations.component';

describe('InfrastrukturLocationsComponent', () => {
  let component: InfrastrukturLocationsComponent;
  let fixture: ComponentFixture<InfrastrukturLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfrastrukturLocationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfrastrukturLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
