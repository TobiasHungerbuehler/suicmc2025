import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { NavigationService } from "../../services/navigation.service";

// Erstelle einen Union-Typ für die zulässigen Routen
type RouteType = "suicmc" | "sbpc" | "pre ecmc";

@Component({
    selector: "app-instagram",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./instagram.component.html",
    styleUrl: "./instagram.component.scss",
})
export class InstagramComponent {
    currentRoute: RouteType = "suicmc"; // Standardwert mit spezifischem Typ
    currentLanguage: "de" | "en" = "de"; // Standardwert für die Sprache

    constructor(private navigationService: NavigationService) {}

    text = {
        unserVerein: {
            titel: {
                de: "INSTAGRAM",
                en: "INSTAGRAM",
            },
            p1: {
                de: "",
                en: "",
            },
            button: {
                de: "Folge uns auf Instagram",
                en: "Follow us on Instagram",
            },
        },
    };

    // Platzhalterbilder; können später durch echte Instagram-Posts ersetzt werden
    images: string[] = Array(9).fill("https://via.placeholder.com/300");

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
    getText(part: "titel" | "p1" | "button"): string {
        return this.text.unserVerein[part][this.currentLanguage];
    }

    instagramUrl = "https://www.instagram.com/suicmc25_st.gallen";
}
