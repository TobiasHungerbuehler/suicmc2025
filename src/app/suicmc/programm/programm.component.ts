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
                de: `Programmänderungen vorbehalten.`,
                en: `Schedule subject to change.`,
            },
        },
    ];

    rulesText = [
        {
            dayLabel: { de: "FREITAG", en: "FRIDAY" },
            dateLabel: { de: "Freitag, 05. 09. 2025", en: "Friday, 05. 09. 2025" },
            text: {
                de: `15 – 19 Uhr Get together @Hermann Bier
15 – 19 Uhr Registration/Infopoint @Hermann Bier
19 – 21 Uhr Alleycat Metzgkatze
20 – 22 Uhr Essen @Grabenhalle
20 – 23 Uhr Registration/Infopoint @Grabenhalle
20 – 04 Uhr Party @Grabenhalle`,
                en: `15 – 19 Uhr Get together @Hermann Bier
15 – 19 Uhr Registration/Infopoint @Hermann Bier
19 – 21 Uhr Alleycat Metzgkatze
20 – 22 Uhr Food @Grabenhalle
20 – 23 Uhr Registration/Infopoint @Grabenhalle
20 – 04 Uhr Party @Grabenhalle`,
            },
        },
        {
            dayLabel: { de: "SAMSTAG", en: "SATURDAY" },
            dateLabel: { de: "Samstag, 06. 09. 2025", en: "Saturday, 06. 09. 2025" },
            text: {
                de: `07 – 09 Uhr Frühstück @Areal Bürgli
07 – 11:30 Uhr Registration/Infopoint @Areal Bürgli
10 – 12 Uhr Bergsprint @Dreilinden
11 – 13 Uhr Appetizer @Dreilinden
12 – 19 Uhr Registration/Infopoint @Areal Theater
ab 12 Uhr Musik, Essensstände, Bar, Laufradolympiade, Tattoo, Goldsprint,
Velosammelstelle von Velafrica @Areal Theater
14 – 16 Uhr Cargorace @Areal Theater
16:15 - 17:15 Uhr Sponsor*innenapero mit Wein von amiata Bioweine
17 – 18 Uhr WTNB-Forum @Areal Theater
18 – 19 Uhr Skid, Trackstand @Areal Theater, Parkstrasse
19 – 21 Uhr Alleycat
20 – 22 Uhr Essen @Grabenhalle
20 – 23 Uhr Registration/Infopoint @Grabenhalle
20 – 04 Uhr Party @Grabenhalle`,
                en: `07 – 09 Uhr Breakfast @Areal Bürgli
07 – 11:30 Uhr Registration/Infopoint @Areal Bürgli
10 – 12 Uhr Hillsprint @Dreilinden
11 – 13 Uhr Appetizer @Dreilinden
12 – 19 Uhr Registration/Infopoint @Areal Theater
ab 12 Uhr Music, Food stalls, Bar, Balance bike olympics, Tattoo, Goldsprint,
Bicycle collection point of Velafrica @Areal Theater
14 – 16 Uhr Cargorace @Areal Theater
16:15 - 17:15 Sponsor Apero with wine from Amiata Organic Wines
17 – 18 Uhr WTNB-Forum @Areal Theater
18 – 19 Uhr Skid, Trackstand @Areal Theater, Parkstrasse
19 – 21 Uhr Alleycat
20 – 22 Uhr Food @Grabenhalle
20 – 23 Uhr Registration/Infopoint @Grabenhalle
20 – 04 Uhr Party @Grabenhalle`,
            },
        },
        {
            dayLabel: { de: "SONNTAG", en: "SUNDAY" },
            dateLabel: { de: "Sonntag, 07. 09. 2025", en: "Sunday, 07. 09. 2025" },
            text: {
                de: `07 – 12 Uhr Brunch @Areal Theater
07 – 16 Uhr Registration/Infopoint @Areal Theater
ab 8 Uhr Musik, Essensstände, Bar, Laufradolympiade, Tattoo, Goldsprint,
Velosammelstelle von Velafrica @Areal Theater
10 – 15 Uhr Mainrace @Areal Theater inkl. IBG Engineering Sprint
16 – 17 Uhr Open Forum @Areal Theater
17 Uhr Gruppenfoto @Areal Theater
17 – 18 Uhr Ehrungen @Areal Theater
17 – 20 Uhr Essen @Areal Theater
20 – 23 Uhr Registration/Infopoint @Schwarzer Engel
20 – 23 Uhr Party @Schwarzer Engel`,
                en: `07 – 12 Uhr Brunch @Areal Theater
07 – 16 Uhr Registration/Infopoint @Areal Theater
ab 8 Uhr Music, Food stalls, Bar, Balance bike olympics, Tattoo, Goldsprint,
Bicycle collection point of Velafrica @Areal Theater
10 – 15 Uhr Mainrace @Areal Theater inkl. IBG Engineering Sprint
16 – 17 Uhr Open Forum @Areal Theater
17 Uhr Group Photo @Areal Theater
17 – 18 Uhr Awards @Areal Theater
17 – 20 Uhr Food @Areal Theater
20 – 23 Uhr Registration/Infopoint @Schwarzer Engel
20 – 23 Uhr Party @Schwarzer Engel`,
            },
        },
    ];
}
