import { Component } from "@angular/core";
import { NavigationService } from "../../services/navigation.service";

@Component({
    selector: "app-stoerer-kontakt",
    standalone: true,
    imports: [],
    templateUrl: "./stoerer-kontakt.component.html",
    styleUrl: "./stoerer-kontakt.component.scss",
})
export class StoererKontaktComponent {
    currentRoute: string = "SUICMC"; // Standardwert
    showLanguageSelector = false; // Steuert, ob der Language-Selector angezeigt wird
    isOverlayVisible = false; // Standardmäßig ist das Overlay ausgeblendet
    currentLanguage: string = "de"; // Standardwert

    constructor(private navigationService: NavigationService) {}

    ngOnInit(): void {
        // Abonniere den Service, um Änderungen der Route zu überwachen
        // this.navigationService.currentRoute$.subscribe(route => {
        //   this.currentRoute = route;
        // });

        // Abonniere die aktuelle Sprache
        this.navigationService.currentLanguage$.subscribe((language) => {
            this.currentLanguage = language;
        });
    }

    scrollTo(id: string): void {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
}
