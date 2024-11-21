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
                    de: "Die Online-Anmeldung für die SUICMC 25 ist vom 1. Oktober 2024 bis zum 31. August 2025 geöffnet. Danach kannst du dich vor Ort anmelden. Die Anmeldegebühr beträgt 20.- CHF. Magst du mehr beisteuern? Wir sind um jede zusätzliche Unterstützung sehr dankbar. Eine Bestätigungsmail mit den Zahlungsinformationen erhältst du nach der Anmeldung. ",
                    en: "The online registration for SUICMC 25 is open from October 1, 2024, to August 31, 2025. After that, you can register on-site. The registration fee is 20.- CHF. If you'd like to contribute more, we greatly appreciate any additional support. You will receive a confirmation e-mail with payment details after registration.  ",
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
                    de: "Die Online-Anmeldung für die SBPC ist von Januar 2025 bis zum 31. August 2025 geöffnet. Die Anmeldegebühr beträgt 80.- CHF pro Team. Möchtet ihr mehr beisteuern? Wir sind für jede zusätzliche Unterstützung sehr dankbar. Eine Bestätigungsmail mit den Zahlungsinformationen erhältst du nach der Anmeldung. ",
                    en: "The online registration for the SBPC is open from January 2025, to August 31, 2025. The registration fee is 80.- CHF per team. Would you like to contribute more? We are very grateful for any additional support. You will receive a confirmation email with the payment information after registration.  ",
                },
                button: {
                    de: "ONLINE ANMELDUNG",
                    en: "ONLINE REGISTRATION",
                    link: "",
                },
            },
            "pre ecmc": {
                titel: {
                    de: "Anmeldung",
                    en: "Registration",
                },
                text1: {
                    de: "Wenige Tage nach der SUICMC findet die Europäische Kuriermeister*innenschaft in Salzburg statt, kurz: <a href='https://www.ecmc2025.com/'>ECM</a>. Wir veranstalten einen Groupride dorthin, welcher am 8. September 2025 in St. Gallen startet. Der Button weiter unten führt dich zum Registrierungsformular. ",
                    en: "Following the SUICMC, the European Cycle Messenger Championship will take place in Salzburg, short <a href='https://www.ecmc2025.com/'>ECM</a>. We are organizing a group ride, which will start on September 8, 2025, in St. Gallen. The button below will take you to the registration form. ",
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
