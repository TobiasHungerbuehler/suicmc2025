import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { NavigationService } from "../../services/navigation.service";

// Erstelle einen Union-Typ für die zulässigen Routen
type RouteType = "suicmc" | "sbpc" | "pre ecmc";

@Component({
    selector: "app-support-us",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./support-us.component.html",
    styleUrl: "./support-us.component.scss",
})
export class SupportUsComponent {
    currentRoute: RouteType = "suicmc"; // Standardwert mit spezifischem Typ
    currentLanguage: "de" | "en" = "de"; // Standardwert für die Sprache

    constructor(private navigationService: NavigationService) {}

    text = {
        supportUs: {
            titel: {
                de: "Deine Unterstützung  ",
                en: "Like to support us ",
            },
            p1: {
                de: `
Wir freuen uns über jede Art von Unterstützung! Wenn du Lust hast, uns bei der Durchführung des Events zu helfen, würden wir das sehr schätzen. Schreibe uns gerne eine <a href='mailto:helfen@suicmc2025.ch'>E-Mail</a>, damit wir deinen Einsatz gemeinsam planen können. Wenn du uns finanziell unterstützen möchtest, kannst du entweder den gewünschten Betrag per Twint an uns senden oder das Sponsoring-Ressort per <a href='mailto:finanzen@suicmc2025.ch'>E-Mail</a> kontaktieren. Vielen Dank für dein Engagement!
      `,
                en: `
We appreciate any kind of support! If you would like to help us with the execution of the event, we would greatly appreciate it. Feel free to send us an <a href='mailto:helfen@suicmc2025.ch'>e-mail</a>, so we can plan your involvement together. If you would like to support us financially, you can either send the desired amount via Twint or contact the sponsorship department by <a href='mailto:finanzen@suicmc2025.ch'>e-mail</a>. Thank you for your commitment!
      `,
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
    getText(part: "titel" | "p1"): string {
        return this.text.supportUs[part][this.currentLanguage];
    }

    // Twint codes ausgeben
    getTwintImageUrl(): string {
        const base = "assets/img/twint";
        const routeKey = this.currentRoute.replace(/\s/g, "-");
        return `${base}/TWINT_${routeKey}_${this.currentLanguage}.png`;
    }
}
