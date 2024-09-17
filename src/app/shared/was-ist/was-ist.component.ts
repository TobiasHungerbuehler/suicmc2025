import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

// Erstelle einen Union-Typ für die zulässigen Routen
type RouteType = 'suicmc' | 'sbpc' | 'pre ecmc';

@Component({
  selector: 'app-was-ist',
  standalone: true,
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
          "de": "Die Suisse Cycling Messenger Championships kurz SUICMC, sind die Schweizermeister*innenschaften der Velokurier*innen Branche. Es handelt sich dabei um ein vielfältiges, lustiges und aufregendes Wochenende, gespickt mit Partys, Herausforderungen und vielen lieben Menschen. Alle sind willkommen. Das Hauptevent stellt dabei das Mainrace am Sonntag dar. Gleichzeitig findet auch die Bikepolo Meister*innenschaft statt. ",
          "en": "The Swiss Cycling Messenger Championships, or SUICMC for short, are the Swiss championships of the bike courier community. It’s a diverse, fun, and exciting weekend filled with parties, challenges, and many wonderful people. Everyone is welcome. The main event is the Mainrace on Sunday. At the same time, the Bike Polo championship is also taking place."
        }
      },
      "sbpc": {
        "titel": {
          "de": "Was sind die SBPC?",
          "en": "What is the SBPC?"
        },
        "text1": {
          "de": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis felis nec nisi viverra cursus. Aenean eget scelerisque leo. Sed aliquet malesuada erat.",
          "en": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis felis nec nisi viverra cursus. Aenean eget scelerisque leo. Sed aliquet malesuada erat."
        }
      },
      "pre ecmc": {
        "titel": {
          "de": "Was sind die PRE ECMC?",
          "en": "What is the PRE ECMC?"
        },
        "text1": {
          "de": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget odio id risus fermentum pretium non sit amet nulla. Fusce aliquam suscipit est.",
          "en": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget odio id risus fermentum pretium non sit amet nulla. Fusce aliquam suscipit est."
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
