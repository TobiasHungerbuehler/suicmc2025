import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SportInklusivComponent } from "./sport-inklusiv.component";

describe("SportInklusivComponent", () => {
    let component: SportInklusivComponent;
    let fixture: ComponentFixture<SportInklusivComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SportInklusivComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(SportInklusivComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
