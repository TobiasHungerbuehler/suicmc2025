import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

// Erstelle einen Union-Typ für die zulässigen Routen
type RouteType = 'suicmc' | 'sbpc' | 'pre ecmc';

@Component({
    selector: 'app-unser-verein',
    imports: [CommonModule],
    templateUrl: './unser-verein.component.html',
    styleUrls: ['./unser-verein.component.scss']
})
export class UnserVereinComponent implements OnInit {
  currentRoute: RouteType = 'suicmc'; // Standardwert mit spezifischem Typ
  currentLanguage: 'de' | 'en' = 'de';  // Standardwert für die Sprache

  constructor(private navigationService: NavigationService) {}

  text = {
    "unserVerein": {
      "titel": {
        "de": "UNSER VEREIN",
        "en": "OUR ASSOCIATION"
      },
      "p1": {
        "de": "Hinter der Organisation steht der Verein Drehmoment 9000, welcher im Mai 2022 in einer Velowerkstatt durch St.Galler Velokurier*innen zwecks Reparaturhilfe und deren Ersatzteilbeschaffung sowie dem Interesse Anlässe für die Kurier- und Velocommunity zu organisieren, gegründet wurde. ",
        "en": "Behind the organization is the association Drehmoment 9000, which was founded in May 2022 in a bicycle workshop by St. Gallen bike couriers with the purpose of providing repair assistance and procuring spare parts, as well as the interest in organizing events for the courier and cycling community. "
      },
      "p2": {
        "de": "Das Herz des Vereins besteht aus drei Vorstandsmitgliedern. Für die Organisation der SUICMC 2025 und SBPC 2025 haben sich rund 25 Ressortleiter*innen gemeldet, welche sich darum kümmern, dass von der Anmeldung, über das Catering und die sanitären Anlagen bis hin zur Streckensicherung alles reibungslos verläuft. ",
        "en": "The heart of the association consists of three board members. For the organization of the SUICMC 2025 and SBPC 2025, around 25 department heads have volunteered, to ensure that everything runs smoothly, from registration and catering to sanitary facilities and course security. "
      },
      "p3": {
        "de": "Wir freuen uns auf euch",
        "en": "we look forward to seeing you"}
    }
  };

  ngOnInit(): void {
    // Abonniere den aktuellen Routenstatus
    this.navigationService.currentRoute$.subscribe(route => {
      const validRoute = route.toLowerCase() as RouteType;
      if (validRoute) {
        this.currentRoute = validRoute;
      }
    });

    // Abonniere die aktuelle Sprache
    this.navigationService.currentLanguage$.subscribe(language => {
      const validLanguage = language.toLowerCase() as 'de' | 'en';
      if (validLanguage) {
        this.currentLanguage = validLanguage;
      }
    });
  }

  // Methode, um den Text für Titel oder Absätze dynamisch abzurufen
  getText(part: 'titel' | 'p1' | 'p2'| 'p3'): string {
    return this.text.unserVerein[part][this.currentLanguage];
  }
}
