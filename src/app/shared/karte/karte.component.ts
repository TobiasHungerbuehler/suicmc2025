import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OnInit } from "@angular/core";
import { NavigationService } from "../../services/navigation.service";

// Erstelle einen Union-Typ für die zulässigen Routen
type RouteType = "suicmc" | "sbpc" | "pre ecmc";

@Component({
    selector: "app-karte",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./karte.component.html",
    styleUrl: "./karte.component.scss",
})
export class KarteComponent {
    currentRoute: RouteType = "suicmc"; // Standardwert mit spezifischem Typ
    currentLanguage: "de" | "en" = "de"; // Standardwert für die Sprache

    constructor(private navigationService: NavigationService) {}

    text = {
        anmeldung: {
            suicmc: {
                titel: {
                    de: "Übersichtsplan",
                    en: "Overview map",
                },
                text1: {
                    de: "Wir bieten insgesamt 3 Housings an, welche alle innerhalb von 5 Minuten mit dem Fahrrad erreichbar sind. Allfällige Änderungen vorbehalten.",
                    en: "We offer a total of 3 housing options, all of which are reachable by bike within 5 minutes. Subject to change.",
                },
            },
            sbpc: {
                titel: {
                    de: "Übersichtsplan",
                    en: "Overview map",
                },
                text1: {
                    de: "Wir bieten insgesamt 3 Housings an, welche alle innerhalb von 5 Minuten mit dem Fahrrad erreichbar sind. Allfällige Änderungen vorbehalten.",
                    en: "We offer a total of 3 housing options, all of which are reachable by bike within 5 minutes. Subject to change.",
                },
            },
            "pre ecmc": {
                titel: {
                    de: "Übersichtsplan",
                    en: "Overview map",
                },
                text1: {
                    de: "Wir bieten insgesamt 3 Housings an, welche alle innerhalb von 5 Minuten mit dem Fahrrad erreichbar sind. Allfällige Änderungen vorbehalten.",
                    en: "We offer a total of 3 housing options, all of which are reachable by bike within 5 minutes. Subject to change.",
                },
            },
        },
    };

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

    // Methode, um den Text für Titel oder Absätze dynamisch abzurufen
    getText(part: "titel" | "text1"): string {
        return this.text.anmeldung[this.currentRoute][part][this.currentLanguage];
    }
}
