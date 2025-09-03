import { Component } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { ChangeDetectionStrategy, signal } from "@angular/core";
import { NavigationService } from "../../services/navigation.service";
import { CommonModule } from "@angular/common";

// Erstelle einen Union-Typ für die zulässigen Routen
type RouteType = "suicmc" | "sbpc" | "pre ecmc";

@Component({
    selector: "app-progamm-sbpc",
    standalone: true,
    imports: [CommonModule, MatExpansionModule],
    templateUrl: "./progamm-sbpc.component.html",
    styleUrl: "./progamm-sbpc.component.scss",
})
export class ProgammSbpcComponent {
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
                de: `Programmänderungen vorbehalten.`,
                en: `Schedule subject to change.`,
            },
        },
    ];

    rulesText = [
        {
            dayLabel: { de: 'FREITAG', en: 'FRIDAY' },
            dateLabel: { de: 'Freitag, 05. 09. 2025', en: 'Friday, 05. 09. 2025' },
            text: {
                de: `15 – 19 Uhr Get together @Hermann Bier
19 – 21 Uhr Alleycat
20 – 22 Uhr Essen @Grabenhalle
20 – 04 Uhr Party @Grabenhalle`,
                en: `15 – 19 Uhr Get together @Hermann Bier
19 – 21 Uhr Alleycat
20 – 22 Uhr Food @Grabenhalle
20 – 04 Uhr Party @Grabenhalle`,
            },
        },
        {
            dayLabel: { de: 'SAMSTAG', en: 'SATURDAY' },
            dateLabel: { de: 'Samstag, 06. 09. 2025', en: 'Saturday, 06. 09. 2025' },
            text: {
                de: `07 – 09 Uhr Frühstück @Areal Bürgli
08 – 16 Uhr Infopoint @Areal Bürgl
08 – 20 Uhr Quali SBPC @Areal Bürgli
11 – 13 Uhr Appetizer @Areal Bürgli
20 – 22 Uhr Essen @Grabenhalle
20 – 04 Uhr Party @Grabenhalle`,
                en: `07 – 09 Uhr Breakfast @Areal Bürgli
08 – 16 Uhr Infopoint @Areal Bürgl
08 – 20 Uhr Quali SBPC @Areal Bürgli
11 – 13 Uhr Appetizer @Areal Bürgli
20 – 22 Uhr Food @Grabenhalle
20 – 04 Uhr Party @Grabenhalle`,
            },
        },
        {
            dayLabel: { de: 'SONNTAG', en: 'SUNDAY' },
            dateLabel: { de: 'Sonntag, 07. 09. 2025', en: 'Sunday, 07. 09. 2025' },
            text: {
                de: `07 – 12 Uhr Brunch @Areal Theater
08 – 13 Uhr Playoffs SBPC @Areal Bürgli
08 – 16 Uhr Infopoint @Areal Bürgli
13 – 17 Uhr Finals SBPC @Areal Bürgli
17 Uhr Gruppenfoto @Areal Theater
17 – 18 Uhr Ehrungen @Areal Theater
17 – 20 Uhr Essen @Areal Theater
20 – 23 Uhr Party @Schwarzer Engel`,
                en: `07 – 12 Uhr Brunch @Areal Theater
08 – 13 Uhr Playoffs SBPC @Areal Bürgli
08 – 16 Uhr Infopoint @Areal Bürgli
13 – 17 Uhr Finals SBPC @Areal Bürgli
17 Uhr Group Photo @Areal Theater
17 – 18 Uhr Awards @Areal Theater
17 – 20 Uhr Food @Areal Theater
20 – 23 Uhr Party @Schwarzer Engel`,
            },
        },
    ];
}
