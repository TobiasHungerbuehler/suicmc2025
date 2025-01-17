import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

// Erstelle einen Union-Typ für die zulässigen Routen
type RouteType = 'suicmc' | 'sbpc' | 'pre ecmc';

@Component({
    selector: 'app-was-ist',
    imports: [CommonModule],
    templateUrl: './was-ist.component.html',
    styleUrl: './was-ist.component.scss'
})
export class WasIstComponent {

  currentRoute: RouteType = 'suicmc'; // Standardwert mit spezifischem Typ
  currentLanguage: 'de' | 'en' = 'de';  // Standardwert für die Sprache

  constructor(private navigationService: NavigationService) {}

  text = {
    "anmeldung": {
      "suicmc": {
        "titel": {
          "de": "Was sind die SUICMC?",
          "en": "What is the SUICMC?"
        },
        "text1": {
          "de": "Die Suisse Cycling Messenger Championships (kurz SUICMC) sind die Schweizermeister*innenschaften der Velokurier*innen. Dabei handelt es sich um ein vielfältiges, interessantes und aufregendes Wochenende, gespickt mit Partys, Herausforderungen und vielen lieben Menschen. Alle sind willkommen! Das Hauptevent ist das Mainrace am Sonntag. Am selben Wochenende findet auch die Bikepolo Meister*innenschaft statt. ",
          "en": "The Suisse Cycling Messenger Championships (SUICMC for short) are the Swiss championships of the bike courier community. It’s a diverse, fun, and exciting weekend filled with parties, challenges, and many wonderful people. Everyone is welcome! The highlight is the Mainrace on Sunday. At the same time, the Bike Polo championship is also taking place. "
        }
      },
      "sbpc": {
        "titel": {
          "de": "Was sind die SBPC?",
          "en": "What is the SBPC?"
        },
        "text1": {
          "de": "Die Suisse Bikepolo Championships (kurz SBPC) sind die Schweizer Bikepolo Meister*innenschaften. Die SBPC findet zeitgleich zur SUICMC statt. Du darfst dich auf ein vielfältiges, interessantes und aufregendes Wochenende freuen, gespickt mit Partys, Herausforderungen und vielen lieben Menschen. Alle sind willkommen! Die Bikepolo Meister*innenschaft findet am Samstag und Sonntag statt.  ",
          "en": "SBPC stands for Suisse Bikepolo Championships. The SBPC takes place simultaneously with the SUICMC. You can look forward to a diverse, fun, and exciting weekend filled with parties, challenges, and many wonderful people. Everyone is welcome! The Bikepolo Championships take place on Saturday and Sunday. "
        }
      },
      "pre ecmc": {
        "titel": {
          "de": "Was sind die PRE ECMC?",
          "en": "What is the PRE ECMC?"
        },
        "text1": {
          "de": "",
          "en": ""
        }
      }
    }
  }
  

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
  getText(part: 'titel' | 'text1' ): string {
    return this.text.anmeldung[this.currentRoute][part][this.currentLanguage];
  }
}
