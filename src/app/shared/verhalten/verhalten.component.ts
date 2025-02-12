import { Component } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { ChangeDetectionStrategy, signal } from "@angular/core";
import { NavigationService } from "../../services/navigation.service";
import { CommonModule } from "@angular/common";

// Erstelle einen Union-Typ für die zulässigen Routen
type RouteType = "suicmc" | "sbpc" | "pre ecmc";

@Component({
    selector: "app-verhalten",
    standalone: true,
    imports: [CommonModule, MatExpansionModule],
    templateUrl: "./verhalten.component.html",
    styleUrl: "./verhalten.component.scss",
})
export class VerhaltenComponent {
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
                de: "Damit sich an dieser Veranstaltung möglichst alle wohlfühlen, gilt folgender Verhaltenskodex. Falls sich einzelne Teilnehmende nicht daran halten und du dich dadurch gestört fühlst, kannst du dich an das Awareness-Team wenden.",
                en: "To ensure that everyone feels comfortable at this event, the following code of conduct applies. If any participants fail to adhere to it and you feel disturbed as a result, you can contact the Awareness Team.",
            },
        },
    ];

    rulesText = [
        {
            titel: {
                de: "Fotografieren",
                en: "Photos",
            },
            text: {
                de: "Fotografiere oder filme Menschen nur mit deren Erlaubnis. Bei Veröffentlichung der Fotos oder Filme musst du ebenfalls um Erlaubnis fragen, oder die Betroffenen sonst unkenntlich machen. Im Housing dürfen keine anderen Menschen fotografiert und gefilmt werden.",
                en: "Only take photos or record videos of people with their permission. If you plan to publish the photos or videos, you must also ask for their consent or otherwise ensure that the individuals are anonymized. At the housing, photographing or filming other people is not allowed.",
            },
        },
        {
            titel: {
                de: "No Shirt Policy",
                en: "No Shirt Policy",
            },
            text: {
                de: "Zeige Solidarität und behalte in der Öffentlichkeit dein Shirt an.",
                en: "Show solidarity and keep your shirts in public on. ",
            },
        },
        {
            titel: {
                de: "Konsum",
                en: "Consumption",
            },
            text: {
                de: "Achte beim Konsumieren von Alkohol und anderen Substanzen deine und die Grenzen anderer. Der Safer Space und das Housing sind konsumfreie Räume.",
                en: "When consuming substances such as alcohol or other substances, respect your own boundaries and those of others. The Safer Space and the housing are consumption-free places.",
            },
        },
        {
            titel: {
                de: "Wettbewerb",
                en: "Competition",
            },
            text: {
                de: "Klar, unser Event ist mitunter auch ein sportlicher Wettbewerb. Das Wohlergehen aller Teilnehmer*innen und aller Gäste steht bei uns jedoch im Vordergrund, sowohl während der Rennen, des Turiers wie auch rund um die Side-Events.",
                en: "Sure, our event is a part of it also a competitive event. However, the well-being of all participants and guests is our top priority, both during the races, the tournament and at the side events.",
            },
        },
        {
            titel: {
                de: "Rauchen",
                en: "Smoking",
            },
            text: {
                de: "Bitte frage Menschen in deiner Nähe, ob es für sie ok ist, wenn du rauchst. Für manche Menschen bedeutet Passivrauchen ein Gesundheitsrisiko. In Innenräumen ist Rauchen nicht erlaubt.",
                en: "Not everyone smokes and not everyone feels comfortable when someone smokes nearby. Please ask whether people in your immediate vicinity will be bothered if you light up your cigarette. For some people smoking is a risk to their health. Smoking indoors is not allowed.",
            },
        },
        {
            titel: {
                de: "Hunde",
                en: "Dogs",
            },
            text: {
                de: "Wenn möglich lasse deinen Hund zu Hause. Wenn das nicht möglich ist, beachte die Bedürfnisse deines Haustiers, wie auch der anderen Teilnehmer*innen. Manche Menschen haben Angst vor Hunden. Assistenzhunde sind willkommen.",
                en: "If possible, leave your dog at home. If that’s not possible, be mindful of your pet’s needs as well as those of other participants. Some people are afraid of dogs. Assistance dogs are welcome.",
            },
        },
    ];
}
