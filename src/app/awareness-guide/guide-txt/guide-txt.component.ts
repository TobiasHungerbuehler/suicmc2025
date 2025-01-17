import { Component, OnInit } from "@angular/core";
import { NavigationService } from "../../services/navigation.service";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-guide-txt",
    imports: [CommonModule],
    templateUrl: "./guide-txt.component.html",
    styleUrl: "./guide-txt.component.scss"
})
export class GuideTxtComponent {
    currentLanguage: "de" | "en" = "de"; // Standardwert für die Sprache

    constructor(private navigationService: NavigationService) {}

    text = [
        {
            titel: {
                de: "Warum Awareness?",
                en: "Why Awareness?",
            },
            text: {
                de: "<b>Gemeinsam prägen wir unser Miteinander während dieser SUICMC, SBPC und Pre-ECMC 2025.</b> Es ist uns ein Anliegen, einander in einer Atmosphäre des gegenseitigen Respekts und der Wertschätzung zu begegnen und einen Event zu schaffen, an dem sich alle aufgehoben und akzeptiert fühlen. Unsere Begegnungen sind von Rücksichtnahme und bewusster Sorgfalt geprägt. Sei dir bewusst, dass du die Verantwortung trägst, deinen Teil dazu beizutragen.",
                en: "<b>Together, we shape how we interact with one another during this SUICMC, SBPC, and Pre-ECMC 2025.</b> Our goal is to foster an environment of mutual respect and appreciation, creating an event where everyone feels welcome and accepted. Our interactions are guided by consideration and conscious care. Be aware that you bear responsibility for contributing your part to this atmosphere.",
            },
        },
        {
            titel: {
                de: "Gegen Diskriminierung",
                en: "Against discrimination",
            },
            text: {
                de: "<b>Übergriffiges und diskriminierendes Verhalten jeglicher Art wie Gewalt, verbale oder körperliche Belästigung, Sexismus, rassistische, ableistische, homophobe, transphobe Äusserungen und Handlungen haben bei uns keinen Platz und werden nicht toleriert.</b> Strukturelle Diskriminierung ist inakzeptabel und darf sich innerhalb unserer Gesellschaft und unseren Köpfen nicht weiter verfestigen.",
                en: "<b>Discriminatory or abusive behavior of any kind – as violence, verbal or physical harassment, sexism, racism, ableism, homophobia, or transphobia – has no place at this event and will not be tolerated.</b> Structural discrimination is unacceptable and must not be further entrenched in our society and our minds.",
            },
        },
        {
            titel: {
                de: "Konsens",
                en: "Consent is key",
            },
            text: {
                de: "<b>Wir pflegen eine Kultur des Konsenses – nur ein Ja ist ein Ja. Respektiere die Grenzen anderer, sowohl explizite als auch unausgesprochene.</b> Es ist nicht immer einfach, empathisch zu sein und die Grenzen aller, inklusiver deiner eigenen, zu respektieren. Versuche nachzufragen, wenn du unsicher bist, ob sich eine Person wohl fühlt oder nicht. Grenzen sind subjektiv. Es kann schwerfallen, diese Grenzen zu formulieren und dem Gegenüber mitzuteilen - wir ermutigen dich dazu. Es treffen Individuen mit unterschiedlichen sozialen Realitäten, Meinungen, Erwartungen und Erfahrungswerten aufeinander, und wir versuchen daher, Annahmen über die Erfahrungen anderer zu vermeiden.",
                en: "<b>We foster a culture of consent – only a yes means yes. Respect the boundaries of others, both explicit and unspoken.</b> It’s not always easy to empathize and respect everyone’s boundaries, including your own. If you’re unsure whether someone feels comfortable, ask. Boundaries are subjective, and they can be difficult to articulate. We encourage you to communicate them openly. Individuals with diverse social realities, opinions, expectations, and experiences come together at this event, and we therefore strive to avoid making assumptions about the experiences of others.",
            },
        },
        {
            titel: {
                de: "Im Notfall",
                en: "In case of emergency",
            },
            text: {
                de: "<b>Wir sind uns bewusst, dass es leider zu Grenzverletzungen und Übergriffen kommt. Awareness braucht jede*n von uns (Teilnehmer*innen, Organisation, Besucher*innen, Künstler*innen) und verlangt in Bezug auf unser Verhalten individuelle Reflexion. Das Awareness-Team ist eine Ergänzung dazu.</b> Es ist innerhalb des Anlasses eine öffentliche Anlaufstelle, die Unterstützung bietet, wenn immer du es als notwendig erachtest. Z.B. kann es sein, dass dir der ganze Trubel auf dem Festgelände zu viel ist und du einen Rückzugsort benötigst, oder auch wenn du eine Situation beobachtest oder selbst darin verwickelt bist, die du als grenzüberschreitend wahrnimmst und dich mit jemandem darüber austauschen möchtest. Die Awareness-Arbeit basiert auf Konsens und Dialogen und bietet Rückzug, Austausch zu Fragen und Unsicherheiten. Keine betroffene Person soll sich machtlos oder alleine gelassen fühlen.",
                en: "<b>We recognize that boundary violations and abusive behavior can happen. Awareness requires every one of us – participants, organizers, visitors, and artists – to reflect on our behavior. The Awareness Team is an additional resource to that.</b> They provide a public point of contact during the event and offer support whenever you feel it’s necessary. For example, you might find the atmosphere on the festival grounds overwhelming and need a quiet place to retreat, or you may witness or be involved in a situation you perceive as a boundary violation and want to talk to someone about it. The Awareness Team operates based on consent and dialogue, offering spaces for retreat and conversations about questions or uncertainties. No one affected should feel powerless or alone.",
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
