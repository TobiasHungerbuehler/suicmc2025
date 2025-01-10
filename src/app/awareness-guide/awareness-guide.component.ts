import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { StartComponent } from "../shared/start/start.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { NavigationService } from "../services/navigation.service";
import { StoererKontaktComponent } from "../shared/stoerer-kontakt/stoerer-kontakt.component";

@Component({
    selector: "app-awareness-guide",
    standalone: true,
    imports: [CommonModule, StartComponent, FooterComponent, StoererKontaktComponent],
    templateUrl: "./awareness-guide.component.html",
    styleUrl: "./awareness-guide.component.scss",
})
export class AwarenessGuideComponent {
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
        // this.navigationService.currentLanguage$.subscribe((language) => {
        //     this.currentLanguage = language;
        // });
    }
}
