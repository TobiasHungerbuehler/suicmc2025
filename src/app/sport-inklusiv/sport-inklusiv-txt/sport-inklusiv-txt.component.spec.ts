import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SportInklusivTxtComponent } from "./sport-inklusiv-txt.component";

describe("SportInklusivTxtComponent", () => {
    let component: SportInklusivTxtComponent;
    let fixture: ComponentFixture<SportInklusivTxtComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SportInklusivTxtComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(SportInklusivTxtComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
