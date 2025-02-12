import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FormsModule } from "@angular/forms";
import { RegistrationSbpcComponent } from "./registration-sbpc.component";

describe("RegistrationSbpcComponent", () => {
    let component: RegistrationSbpcComponent;
    let fixture: ComponentFixture<RegistrationSbpcComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RegistrationSbpcComponent],
            imports: [FormsModule], // Wichtig für ngModel
        }).compileComponents();

        fixture = TestBed.createComponent(RegistrationSbpcComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
