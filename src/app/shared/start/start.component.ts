import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { NavigationService } from "../../services/navigation.service";

// Erstelle einen Union-Typ für die zulässigen Routen
type RouteType = "suicmc" | "sbpc" | "pre ecmc" | "awarenessguide";

@Component({
    selector: "app-start",
    imports: [CommonModule, RouterModule],
    templateUrl: "./start.component.html",
    styleUrls: ["./start.component.scss"]
})
export class StartComponent implements OnInit {
    currentRoute: RouteType = "suicmc"; // Standardwert mit spezifischem Typ
    currentLanguage: "de" | "en" = "de"; // Standardwert für die Sprache

    constructor(private navigationService: NavigationService) {}

    text = {
        suicmc: {
            de: {
                titel: "SUICMC 2025",
                sub1: "Schweizer Velokurier*innen-Meister*innenschaft",
                sub2: "5. bis 7. September 2025",
            },
            en: {
                titel: "SUICMC 2025",
                sub1: "Swiss Bike Messenger Championship",
                sub2: "September 5th to 7th, 2025",
            },
        },
        sbpc: {
            de: {
                titel: "SBPC 2025",
                sub1: "Schweizer Bikepolo Meister*innenschaft",
                sub2: "5. bis 7. September 2025",
            },
            en: {
                titel: "SBPC 2025",
                sub1: "Swiss Bike Polo Championship",
                sub2: "September 5th to 7th, 2025",
            },
        },
        "pre ecmc": {
            de: {
                titel: "PRE ECMC 2025",
                sub1: "Group Ride von St.Gallen via München nach Salzburg",
                sub2: "8. bis 11. September 2025",
            },
            en: {
                titel: "PRE ECMC 2025",
                sub1: "Group Ride from St. Gallen via Munich to Salzburg",
                sub2: "September 8th to 11th, 2025",
            },
        },
        awarenessguide: {
            de: {
                titel: "AWARENESS GUIDE",
                sub1: "Gemeinsam prägen wir unser Miteinander während dieser",
                sub2: "SUICMC, SBPC und Pre-ECMC 2025.",
            },
            en: {
                titel: "AWARENESS GUIDE",
                sub1: "Together, we shape how we interact with one another during this ",
                sub2: "SUICMC, SBPC, and Pre-ECMC 2025.",
            },
        },
    };

    ngOnInit(): void {
        // Abonniere den aktuellen Routenstatus
        this.navigationService.currentRoute$.subscribe((route) => {
            // Überprüfen, ob die Route zu den erlaubten Werten gehört
            const validRoute = route.toLowerCase() as RouteType;
            if (validRoute) {
                this.currentRoute = validRoute;
            }
        });

        // Abonniere die aktuelle Sprache
        this.navigationService.currentLanguage$.subscribe((language) => {
            // Überprüfe, ob die Sprache gültig ist
            const validLanguage = language.toLowerCase() as "de" | "en";
            if (validLanguage) {
                this.currentLanguage = validLanguage;
            }
        });
    }

    // Methode, um den Text für die aktuelle Route und Sprache zu holen
    getText() {
        //console.log("CURRENT ROUTE", this.currentRoute, this.currentLanguage);

        return this.text[this.currentRoute][this.currentLanguage];
    }
}
