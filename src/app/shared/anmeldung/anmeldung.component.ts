import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { NavigationService } from "../../services/navigation.service";
import { RouterModule } from "@angular/router";

// Erstelle einen Union-Typ für die zulässigen Routen
type RouteType = "suicmc" | "sbpc" | "pre ecmc";

@Component({
    selector: "app-anmeldung",
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: "./anmeldung.component.html",
    styleUrls: ["./anmeldung.component.scss"],
})
export class AnmeldungComponent implements OnInit {
    currentRoute: RouteType = "suicmc"; // Standardwert mit spezifischem Typ
    currentLanguage: "de" | "en" = "de"; // Standardwert für die Sprache

    constructor(private navigationService: NavigationService) {}

    text = {
        anmeldung: {
            suicmc: {
                titel: {
                    de: "Anmeldung",
                    en: "Registration",
                },
                text1: {
                    de: "Die Online-Anmeldung ist geschlossen. Du kannst dich aber direkt vor Ort am Event spontan anmelden. Die Zeiten und Orte der Registrierung findest du im Programm. Wir freuen uns auf dich!",
                    en: "Online registration is now closed. But don’t worry – you can still sign up on site at the event. You’ll find the registration times and locations in the program. We’re looking forward to seeing you!",
                },
                button: {
                    de: "ONLINE ANMELDUNG",
                    en: "ONLINE REGISTRATION",
                    link: "/registration",
                },
            },
            sbpc: {
                titel: {
                    de: "Anmeldung",
                    en: "Registration",
                },
                text1: {
                    de: "Die Online-Anmeldung für die SBPC 2025 ist vom 01. Januar 2025 bis zum 31. August 2025 geöffnet. Die Anmeldegebühr beträgt 100.- CHF pro Team. Möchtet ihr mehr beisteuern? Wir sind für jede zusätzliche Unterstützung sehr dankbar. Eine Bestätigungsmail mit den Zahlungsinformationen erhält der Teamcaptain nach der Anmeldung.",
                    en: "The online registration for the SBPC 2025 will be open from January 1, 2025, to August 31, 2025. The registration fee is 100 CHF per team. Would you like to contribute more? We are grateful for any additional support. A confirmation email with payment information will be sent to the team captain after registration.",
                },
                button: {
                    de: "ONLINE ANMELDUNG",
                    en: "ONLINE REGISTRATION",
                    link: "/sbpc/registration",
                },
            },
            "pre ecmc": {
                titel: {
                    de: "Anmeldung",
                    en: "Registration",
                },
                text1: {
                    de: "Wenige Tage nach der SUICMC findet die Europäische Kuriermeister*innenschaft in Salzburg statt, kurz: <a href='https://www.ecmc2025.com/'>ECMC</a>. Wir veranstalten einen Groupride dorthin, welcher am 8. September 2025 in St. Gallen startet. Der Button weiter unten führt dich zum Registrierungsformular. ",
                    en: "Following the SUICMC, the European Cycle Messenger Championship will take place in Salzburg, short <a href='https://www.ecmc2025.com/'>ECMC</a>. We are organizing a group ride, which will start on September 8, 2025, in St. Gallen. The button below will take you to the registration form. ",
                },
                button: {
                    de: "ONLINE ANMELDUNG",
                    en: "ONLINE REGISTRATION",
                    link: "https://cryptpad.fr/form/#/2/form/view/20uxctiF72UmCEDOOGG6UAH0s-W6BJBA6kryiIJIZMM/) ",
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
    getText(part: "titel" | "text1" | "button"): string {
        return this.text.anmeldung[this.currentRoute][part][this.currentLanguage];
    }

    // Methode, um den Text für Titel oder Absätze dynamisch abzurufen
    getLink() {
        return this.text.anmeldung[this.currentRoute]["button"]["link"];
    }
}
