import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NavigationService } from "../../services/navigation.service";

@Component({
    selector: "app-glossar",
    imports: [CommonModule],
    templateUrl: "./glossar.component.html",
    styleUrl: "./glossar.component.scss"
})
export class GlossarComponent {
    currentLanguage: "de" | "en" = "de"; // Standardwert für die Sprache

    constructor(private navigationService: NavigationService) {}

    text = [
        {
            titel: {
                de: "<b>AWARENESS ≠ COPS</b>",
                en: "<b>AWARENESS ≠ COPS</b>",
            },
            text: {
                de: "Das Awareness-Team ist nicht die Polizei. Unser Ziel ist es, Betroffene zu unterstützen und nicht Regeln durchzusetzen. Wir handeln nur, wenn und wie Betroffene sich das wünschen.<br><br>",
                en: "The Awareness Team is not the police. They only take action as an active support when it is asked to do so. It is not about sanctioning others or imposing rules. Awareness work is based on consensus with the affected person.<br><br>",
            },
        },
        {
            titel: {
                de: "<b>Konsens</b>",
                en: "<b>Consensus</b>",
            },
            text: {
                de: "...ist eine Herangehensweise, um persönliche und sexuelle Bedürfnisse, Grenzen und Wünsche zu reflektieren und zu kommunizieren. Respektiere deine und die Grenzen anderer, sowohl explizite als auch unausgesprochene. Denn nur ein Ja ist ein Ja.<br><br>Frage nach, wenn du unsicher bist, ob sich eine Person wohl fühlt oder nicht. Es kann schwerfallen, die eigenen Grenzen zu formulieren und dem Gegenüber mitzuteilen – wir ermutigen dich dazu.<br><br>",
                en: "... is an approach to reflect on and communicate personal and sexual needs, boundaries, and desires. Respect your own boundaries as well as those of others, both explicit and unspoken.<br><br>Because only a yes is a yes.<br><br>Ask if you're unsure whether someone feels comfortable or not. It can be difficult to express and communicate your own boundaries – we encourage you to do so.<br><br>",
            },
        },
        {
            titel: {
                de: "<b>Definitions-Macht</b>",
                en: "<b>Definitional power</b>",
            },
            text: {
                de: "...heisst, dass Betroffene selbst definieren, was eine Übertretung ihrer Grenzen und Gewalt ist.<br><br>",
                en: "... means that those affected define for themselves what constitutes a violation of their boundaries and what is considered violence.<br><br>",
            },
        },
        {
            titel: {
                de: "<b>Safer Space</b>",
                en: "<b>Safer Space</b>",
            },
            text: {
                de: "Es ist ein ruhiger Safer Space vorhanden, damit sich Betroffene zurückziehen können. Tagsüber befindet er sich in der Nähe des Hauptgeländes, abends bei der Party-Location. Melde dich beim Awareness-Team, falls du diesen Rückzugsort benötigst.<br><br>",
                en: "A quiet Safer Space is available for those affected to retreat. During the day, it is located near the main area, and in the evening, it is near the party venue. Please contact the Awareness Team if you need this retreat space.<br><br>",
            },
        },
        {
            titel: {
                de: "<b>Kategorien und Abkürzungen</b>",
                en: "<b>Categories and short expressions</b>",
            },
            text: {
                de: "<b>WTNBIA+:</b> steht für Women, Transgender, Nonbinäre, Intersex und Agender-Menschen.<br><b>FINTA*:</b> ist dasselbe auf Deutsch: Frauen, Intersex, Nonbinäre, Transgender und Agender-Menschen.<br><br>Da diese Gruppen durch patriarchale Strukturen besonders benachteiligt werden, ist es wichtig, das sprachlich hervorheben zu können.<br><br><b>CIS:</b> Cis-Männer oder Cis-Frauen identifizieren sich mit der Geschlechterrolle, welche ihnen bei der Geburt aufgrund ihrer Genitalien zugeschrieben wurde.<br><br>",
                en: "<b>WTNBIA+:</b> stands for women, transgender, nonbinary, intersexual and agender people.<br><b>FINTA*:</b> is the German expression: Frauen, Intersex, Nonbinäre, Transgender und Agender-Menschen.<br><br>Since these groups are particularly disadvantaged by patriarchal structures, it is important to be able to highlight this linguistically.<br><br><b>CIS-GENDER:</b> Cis-gender man or women identify with the social gender that was assigned to them at birth based on their genitalia.<br><br>",
            },
        },
    ];

    ngOnInit(): void {
        // Abonniere die aktuelle Sprache
        this.navigationService.currentLanguage$.subscribe((language) => {
            const validLanguage = language.toLowerCase() as "de" | "en";
            if (validLanguage) {
                this.currentLanguage = validLanguage;
            }
        });
    }

    // Methode, um den Text für Titel oder Absätze dynamisch abzurufen
    getText(index: number, part: "titel" | "text"): string {
        return this.text[index][part][this.currentLanguage];
    }
}
