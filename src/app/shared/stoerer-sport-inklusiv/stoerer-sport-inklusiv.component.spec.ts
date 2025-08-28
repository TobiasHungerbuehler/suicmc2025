import { ComponentFixture, TestBed } from "@angular/core/testing";
import { StoererSportInklusivComponent } from "./stoerer-sport-inklusiv.component";

describe("StoererSportInklusivComponent", () => {
    let component: StoererSportInklusivComponent;
    let fixture: ComponentFixture<StoererSportInklusivComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [StoererSportInklusivComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(StoererSportInklusivComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
