import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationService } from "../../services/navigation.service";

@Component({
    selector: "app-sport-inklusiv-txt",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./sport-inklusiv-txt.component.html",
    styleUrl: "./sport-inklusiv-txt.component.scss",
})
export class SportInklusivTxtComponent implements OnInit {
    currentLanguage: "de" | "en" = "de";

    constructor(private navigationService: NavigationService) {}

    ngOnInit(): void {
        this.navigationService.currentLanguage$.subscribe((language) => {
            const validLanguage = language.toLowerCase() as "de" | "en";
            if (validLanguage) {
                this.currentLanguage = validLanguage;
            }
        });
    }
}
