import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatExpansionModule } from "@angular/material/expansion";
import { NavigationService } from "../../services/navigation.service";

// Erstelle einen Union-Typ für die zulässigen Routen
type RouteType = "suicmc" | "sbpc" | "pre ecmc";

@Component({
    selector: "app-housing",
    standalone: true,
    imports: [CommonModule, MatExpansionModule],
    templateUrl: "./housing.component.html",
    styleUrl: "./housing.component.scss",
})
export class HousingComponent {
    currentRoute: RouteType = "suicmc";
    currentLanguage: "de" | "en" = "de";

    constructor(private navigationService: NavigationService) {}

    ngOnInit(): void {
        this.navigationService.currentRoute$.subscribe((route) => {
            const validRoute = route.toLowerCase() as RouteType;
            if (validRoute) {
                this.currentRoute = validRoute;
            }
        });

        this.navigationService.currentLanguage$.subscribe((language) => {
            const validLanguage = language.toLowerCase() as "de" | "en";
            if (validLanguage) {
                this.currentLanguage = validLanguage;
            }
        });
    }

    text = {
        title: { de: "Housing", en: "Housing" },
        intro: {
            de: `Wir bemühen uns, gerade beim Camping, dass die Housings
durchgängig mit Personal bewacht werden. Vor allem fürs Open Housing 2 aber
grundsätzlich für alle haben wir 2 Garderoben inkl. Grossraumduschen im Athletik
Zentrum St. Gallen. Dieses befindet sich auf dem Mainrace-Areal und ist Samstag und
Sonntag von 07 – 19 Uhr geöffnet.<br><br>Die Gebühr für das Housing bitte direkt mit der Registrationsgebühr überweisen. Vielen Dank.`,
            en: `We make every effort, especially for the camping options, to
ensure that all housing areas are continuously monitored by staff.
Particularly for Open Housing 2, but in general available to everyone, we provide access
to 2 changing rooms with large communal showers at the Athletics Center St. Gallen.
This facility is located on the Mainrace grounds and is open on Saturday and Sunday
from 07:00 to 19:00.<br><br>Please transfer the housing fee together with the registration fee. Thank you!`,
        },
        items: [
            {
                label: { de: "Housing 1 WTNB / CHF 5", en: "Housing 1 WTNB / CHF 5" },
                text: {
                    de: `Exklusiv für WTNB-Menschen, in einer Zivilschutzanlage im Untergrund (kein
Tageslicht), wo sich rund 60 WTNB-Menschen auf 4 Gemeinschaftszimmer verteilen.<br><br>
Insgesamt 3 Duschen, 1 Waschmöglichkeit sowie 5 Toiletten stehen zur Verfügung.
Punkten kann die Anlage mit komfortablen Feldbetten und das dein Fahrrad ein Dach
über dem Sattel hat.<br><br>
Mitbringen: Seidenschlafsack`,
                    en: `Exclusively for WTNB individuals, located in an underground civil defense shelter (no
daylight), where around 60 WTNB people are accommodated across 4 shared rooms.<br><br>
The facility offers 3 showers, 1 washing station, and 5 toilets. Highlights include
comfortable camp beds and a covered space for your bicycle.<br><br>
What to bring: Silk sleeping bag`,
                },
            },
            {
                label: { de: "Housing 2 OPEN / CHF 5", en: "Housing 2 OPEN / CHF 5" },
                text: {
                    de: `In einer Lichtdurchflutteten Sporthalle, wo sich rund 100 Menschen denselben Raum
teilen. Insgesamt 2 Grossraumduschen und 5 Gemeinschaftstoiletten stehen zur
Verfügung.<br><br>
Mitbringen: Mätteli, Schlafsack`,
                    en: `In a bright and sunlit sports hall, where around 100 people share the same space. The
facility provides 2 large communal showers and 5 shared toilets.<br><br>
What to bring: Sleeping mat, sleeping bag`,
                },
            },
            {
                label: { de: "Housing 3 OPEN Camping / CHF 5", en: "Housing 3 OPEN Camping / CHF 5" },
                text: {
                    de: `Auf rund 300m2 steht dir im Zentrum der Stadt St. Gallen eine Wiese mit angrenzendem
Parkplatz zur Verfügung. Umzäunt von Gittern kommt hier etwas Festivalfeeling auf.
Insgesamt 3 Toiletten, 1 Waschmöglichkeit jedoch keine Dusche stehen zur Verfügung.<br><br>
Mitbringen: Zelt, Mätteli, Schlafsack oder dein Camper / Büssli`,
                    en: `In the heart of St. Gallen, approx. 300 m² of meadow with an adjacent parking lot is
available. Fenced in with barriers, this setup gives off a slight festival vibe. The facility
offers 3 toilets, 1 washing station, but no shower.<br><br>
What to bring: Tent, sleeping mat, sleeping bag or your camper van`,
                },
            },
        ],
    };
}

