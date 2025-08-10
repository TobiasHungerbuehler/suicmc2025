import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { NavigationService } from "../../services/navigation.service";

// Erstelle einen Union-Typ für die zulässigen Routen
type RouteType = "suicmc" | "sbpc" | "pre ecmc";

@Component({
    selector: "app-helfer",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./helfer.component.html",
    styleUrl: "./helfer.component.scss",
})
export class HelferComponent implements OnInit {
    currentRoute: RouteType = "suicmc"; // Standardwert mit spezifischem Typ
    currentLanguage: "de" | "en" = "de"; // Standardwert für die Sprache

    constructor(private navigationService: NavigationService) {}

    text = {
        helfer: {
            titel: {
                de: "Dieser Event ist nur dank euch Helfer*innen möglich!",
                en: "This event is only possible thanks to all of you amazing volunteers!",
            },
            intro: {
                de: "Damit wir gemeinsam ein unvergessliches und reibungsloses Wochenende feiern können, sind wir weiterhin auf der Suche nach engagierten Helfer*innen. Als Helfer*in erhältst du:",
                en: "To make this weekend unforgettable and run smoothly, we’re still looking for dedicated volunteers to join our team. As a volunteer, you’ll get:",
            },
            items: {
                de: ["Verpflegung während des Wochenendes", "Getränke zu vergünstigten Preisen", "Gratis Eintritt zur Party in der Grabenhalle"],
                en: ["Free meals throughout the weekend", "Drinks at reduced prices", "Free entry to the party at Grabenhalle"],
            },
            outro: {
                de: "Wir freuen uns über jede Unterstützung – melde dich jetzt über diesen Link an!",
                en: "We’re grateful for any support – sign up now via this link:",
            },
            link: "https://forms.gle/uUjmbuyNmEYhPHo78",
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

    // Methoden, um Text oder Listen dynamisch abzurufen
    getText(part: "titel" | "intro" | "outro"): string {
        return this.text.helfer[part][this.currentLanguage];
    }

    getList(): string[] {
        return this.text.helfer.items[this.currentLanguage];
    }

    get link(): string {
        return this.text.helfer.link;
    }
}
