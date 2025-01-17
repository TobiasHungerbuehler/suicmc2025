import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NavigationService } from "../../services/navigation.service";

@Component({
    selector: "app-kontakt",
    imports: [CommonModule],
    templateUrl: "./kontakt.component.html",
    styleUrl: "./kontakt.component.scss"
})
export class KontaktComponent {
    currentLanguage: "de" | "en" = "de"; // Standardwert für die Sprache

    constructor(private navigationService: NavigationService) {}

    ngOnInit(): void {
        // Abonniere die aktuelle Sprache
        this.navigationService.currentLanguage$.subscribe((language) => {
            const validLanguage = language.toLowerCase() as "de" | "en";
            if (validLanguage) {
                this.currentLanguage = validLanguage;
            }
        });
    }
}
