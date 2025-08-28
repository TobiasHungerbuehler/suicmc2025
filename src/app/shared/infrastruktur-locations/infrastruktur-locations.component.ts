import { Component } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { NavigationService } from "../../services/navigation.service";
import { CommonModule } from "@angular/common";

// Erstelle einen Union-Typ für die zulässigen Routen
type RouteType = "suicmc" | "sbpc" | "pre ecmc";

@Component({
    selector: "app-infrastruktur-locations",
    standalone: true,
    imports: [CommonModule, MatExpansionModule],
    templateUrl: "./infrastruktur-locations.component.html",
    styleUrl: "./infrastruktur-locations.component.scss",
})
export class InfrastrukturLocationsComponent {
    currentRoute: RouteType = "suicmc"; // Standardwert mit spezifischem Typ
    currentLanguage: "de" | "en" = "de"; // Standardwert für die Sprache

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

    locations = [
        {
            label: { de: "Areal Bürgli", en: "Areal Bürgli" },
            text: {
                de: `- erhöhte Lautstärke (Musik, Ballschläge, Mikrofon, Menschenmenge etc.)
- keine rollstuhlgängige Toilette direkt in der Nähe, 400 m zum Festareal Theater
- 2-3 erhöhte Plätze für Rollstühle auf Tribüne verfügbar
- enge Platzverhältnisse rund ums Spielfeld
- Essen und Getränke
- Sanität`,
                en: `- Elevated volume (music, ball impacts, microphone, crowds, etc.)
- No wheelchair accesible toilet nearby (approx. 400 m to Festival Area – Theater)
- 2-3 elevated spaces on the grandstand available for wheelchairs
- Tight spaces around the playing field
- Food and drinks
- First aid on site`,
            },
        },
        {
            label: { de: "Dreilinden", en: "Dreilinden" },
            text: {
                de: `- Start: keine Überdachung/Sonnenschutz, keine Toiletten, Sitzmöglichkeitenbeschränkt vorhanden
- Ziel: stufenlos, Innenbereich mit Musik und Stroboskop, Aussenbereich vorhanden
- öffentliche Toilette (nicht rollstuhlgängig) 100 m aufwärts vom Zielbereich entfernt,
- Sitzmöglichkeiten beschränkt vorhanden`,
                en: `- Start area: No shelter or sun protection, no toilets, limited seating
- Finish area: Step-free access, indoor area with music and strobe lights
- Outdoor area with a public toilet (not wheelchair accessible) approx. 100 m uphill away
- Limited seating available`,
            },
        },
        {
            label: { de: "Areal Theater", en: "Areal Theater" },
            text: {
                de: `- Erhöhte Lautstärke (Musik, Megafone, Menschenmenge etc.)
- Areal stufenlos, teilweise Trottoirs, rollstuhlgängige Toilette
- Sanität
- Essen und Getränke
- Kinder Laufradolympiade
- Safer Space`,
                en: `- Elevated volume (music, megaphones, crowds, etc.)
- Step-free access across the area, some sidewalks
- Wheelchair-accessible toilet available
- First aid on site
- Food and drinks
- Kids’ bike competition
- Safer Space`,
            },
        },
        {
            label: { de: "Hermann Bier", en: "Hermann Bier" },
            text: {
                de: `- nicht barrierefrei > Treppe (5 Stufen) zum Lokal
- Sitzplätze vorhanden`,
                en: `- Not barrier-free – 5 steps to enter
- Seating available`,
            },
        },
        {
            label: { de: "Grabenhalle", en: "Grabenhalle" },
            text: {
                de: `- stufenlos
- rollstuhlgängige Toilette vorhanden
- Innenbereich: erhöhte Lautstärke (Musik, Menschenmenge etc.), Gehörschutz vorhanden, Stroboskop, Sitzplätze vorhanden
- Aussenbereich: Sitzplätze vorhanden
- Safer Space`,
                en: `- Step-free access
- Wheelchair accessible toilet available
- Indoor: Elevated volume (music, crowds), strobe lights, seating available
- Outdoor area: Seating available
- Safer Space`,
            },
        },
        {
            label: { de: "Schwarzer Engel", en: "Schwarzer Engel" },
            text: {
                de: `- stufenlos bis zum Barbereich, kurze Treppe zum restlichen Bereich
- Toilette im Untergeschoss über Treppe
- Innenbereich: erhöhte Lautstärke, Sitzplätze vorhanden
- Aussenbereich: Sitzplätze vorhanden
- Safer Space`,
                en: `- Step-free access to barber area, short staircase to the rest of the venue
- Toilet in basement, accessible only by stairs
- Indoor: Elevated volume, seating available
- Outdoor: Seating available
- Safer Space`,
            },
        },
        {
            label: { de: "Housing 1 WTNB", en: "Housing 1 WTNB" },
            text: {
                de: `- nicht barrierefrei
- Veloparkplatz im Eingangsbereich (Indoor)`,
                en: `- Not barrier-free
- Indoor bike parking at entrance`,
            },
        },
        {
            label: { de: "Housing 2 OPEN", en: "Housing 2 OPEN" },
            text: {
                de: `- nicht barrierefrei
- Veloparkplatz im Eingangsbereich (Outdoor)`,
                en: `- Not barrier-free
- Outdoor bike parking at entrance`,
            },
        },
        {
            label: { de: "Housing 3 OPEN / Camping", en: "Housing 3 OPEN / Camping" },
            text: {
                de: `- barrierefrei
- Veloparkplatz (Outdoor)`,
                en: `- Barrier-free
- Outdoor bike parking`,
            },
        },
    ];
}

