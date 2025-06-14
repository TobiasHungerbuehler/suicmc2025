import { Component } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { ChangeDetectionStrategy, signal } from "@angular/core";
import { NavigationService } from "../../services/navigation.service";
import { CommonModule } from "@angular/common";

// Erstelle einen Union-Typ für die zulässigen Routen
type RouteType = "suicmc" | "sbpc" | "pre ecmc";

@Component({
    selector: "app-programm-pre-ecmc",
    standalone: true,
    imports: [CommonModule, MatExpansionModule],
    templateUrl: "./programm-pre-ecmc.component.html",
    styleUrl: "./programm-pre-ecmc.component.scss",
})
export class ProgrammPreEcmcComponent {
    currentRoute: RouteType = "suicmc"; // Standardwert mit spezifischem Typ
    currentLanguage: "de" | "en" = "de"; // Standardwert für die Sprache
    readonly panelOpenState = signal(false);

    constructor(private navigationService: NavigationService) {}

    ngOnInit(): void {
        // Abonniere den aktuellen Routenstatus
        this.navigationService.currentRoute$.subscribe((route) => {
            const validRoute = route.toLowerCase() as RouteType;
            if (validRoute) {
                this.currentRoute = validRoute;
            }
        });

        // Abonniere die aktuelle Sprache
        this.navigationService.currentLanguage$.subscribe((language) => {
            const validLanguage = language.toLowerCase() as "de" | "en";
            if (validLanguage) {
                this.currentLanguage = validLanguage;
            }
        });
    }

    text = [
        {
            text: {
                de: `Genaue Öffnungszeiten der Registration folgen. Die Registration ist jedoch an allen Standorten für Teilnehmende und Begleitpersonen möglich.`,
                en: `Exact opening hours of the registration will follow. However, registration is available at all locations for participants and accompanying persons.`,
            },
        },
    ];

    rulesText = [
        {
            dayLabel: { de: "SONNTAG", en: "SUNDAY" },
            dateLabel: { de: "Sonntag, 07. 09. 2025", en: "Sunday, 07. 09. 2025" },
            text: {
                de: `15 – 20 Uhr Welcome Drink @Theater
17 – 20 Uhr Essen @Theater
20 – 23 Uhr Party @Engel`,
                en: `15 – 20 Uhr Welcome Drink @Theater
17 – 20 Uhr Food @Theater
20 – 23 Uhr Party @Engel`,
            },
        },
        {
            dayLabel: { de: "MONTAG", en: "MONDAY" },
            dateLabel: { de: "Montag, 08. 09. 2025", en: "Monday, 08. 09. 2025" },
            text: {
                de: `08 – 10 Uhr Frühstück @Kreuzbleiche
10 Uhr Start Group-Ride @Kreuzbleiche`,
                en: `08 – 10 Uhr Breakfast @Kreuzbleiche
10 Uhr Start Group-Ride @Kreuzbleiche`,
            },
        },
    ];
}
