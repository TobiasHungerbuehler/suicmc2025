import { Component } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { ChangeDetectionStrategy, signal } from "@angular/core";
import { NavigationService } from "../../services/navigation.service";
import { CommonModule } from "@angular/common";

// Erstelle einen Union-Typ für die zulässigen Routen
type RouteType = "suicmc" | "sbpc" | "pre ecmc";

@Component({
    selector: "app-programm",
    standalone: true,
    imports: [CommonModule, MatExpansionModule],
    templateUrl: "./programm.component.html",
    styleUrl: "./programm.component.scss",
})
export class ProgrammComponent {
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
            dayLabel: { de: "FREITAG", en: "FRIDAY" },
            dateLabel: { de: "Freitag, 05. 09. 2025", en: "Friday, 05. 09. 2025" },
            text: {
                de: `15 – 19 Uhr Welcome Drink @Hermann Bier
                      19 – 21 Uhr Alleycat
                      20 – 22 Uhr Essen @Grabenhalle
                      20 – 04 Uhr Party @Grabenhalle`,
                en: `15 – 19 Uhr Welcome Drink @Hermann Bier
                      19 – 21 Uhr Alleycat
                      20 – 22 Uhr Food @Grabenhalle
                      20 – 04 Uhr Party @Grabenhalle`,
            },
        },
        {
            dayLabel: { de: "SAMSTAG", en: "SATURDAY" },
            dateLabel: { de: "Samstag, 06. 09. 2025", en: "Saturday, 06. 09. 2025" },
            text: {
                de: `07 – 09 Uhr Frühstück @Bürgli
                    10 – 12 Uhr Bergsprint @Dreilinden
                    11 – 13 Uhr Appetizer @Dreilinden
                    14 – 16 Uhr Cargorace @Museumsstr.
                    17 – 18 Uhr WTNB-Forum @Theater
                    18 – 19 Uhr Skid, Trackstand @Theater
                    19 – 21 Uhr Alleycat
                    20 – 22 Uhr Essen @Grabenhalle
                    20 – 04 Uhr Party @Grabenhalle`,
                en: `07 – 09 Uhr Breakfast @Bürgli
                    10 – 12 Uhr Hill Sprint @Dreilinden
                    11 – 13 Uhr Appetizer @Dreilinden
                    14 – 16 Uhr Cargorace @Museumsstr.
                    17 – 18 Uhr WTNB-Forum @Theater
                    18 – 19 Uhr Skid, Trackstand @Theater
                    19 – 21 Uhr Alleycat
                    20 – 22 Uhr Food @Grabenhalle
                    20 – 04 Uhr Party @Grabenhalle`,
            },
        },
        {
            dayLabel: { de: "SONNTAG", en: "SUNDAY" },
            dateLabel: { de: "Sonntag, 07. 09. 2025", en: "Sunday, 07. 09. 2025" },
            text: {
                de: `07 – 12 Uhr Brunch @Theater
                      10 – 15 Uhr Mainrace @Museumsstr. inkl. Sprint
                      16 – 17 Uhr Open Forum @Theater
                      17      Uhr Gruppenfoto @Theater
                      17 – 18 Uhr Ehrungen @Theater
                      17 – 20 Uhr Essen @Theater
                      20 – 23 Uhr Party @Engel`,
                en: `07 – 12 Uhr Brunch @Theater
                      10 – 15 Uhr Mainrace @Museumsstr. incl. Sprint
                      16 – 17 Uhr Open Forum @Theater
                      17      Uhr Group Photo @Theater
                      17 – 18 Uhr Awards @Theater
                      17 – 20 Uhr Food @Theater
                      20 – 23 Uhr Party @Engel`,
            },
        },
    ];
}
