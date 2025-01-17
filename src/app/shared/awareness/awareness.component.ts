import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

// Erstelle einen Union-Typ für die zulässigen Routen
type RouteType = 'suicmc' | 'sbpc' | 'pre ecmc';

@Component({
    selector: 'app-awareness',
    imports: [CommonModule],
    templateUrl: './awareness.component.html',
    styleUrl: './awareness.component.scss'
})
export class AwarenessComponent {

  currentRoute: RouteType = 'suicmc'; // Standardwert mit spezifischem Typ
  currentLanguage: 'de' | 'en' = 'de';  // Standardwert für die Sprache

  constructor(private navigationService: NavigationService) {}

  text = {
    "anmeldung": {
      "suicmc": {
        "titel": {
          "de": "Awareness ",
          "en": "Awareness "
        },
        "text1": {
          "de": "Unser Awareness-Konzept liegt uns besonders am Herzen. Achtsamkeit und Rücksicht im Umgang miteinander stehen dabei an erster Stelle. Persönliche Grenzen müssen respektiert werden und ein respektvolles Miteinander ist selbstverständlich. Bitte nimm dir die Zeit, unser Awareness-Konzept sorgfältig zu lesen – nur gemeinsam können wir eine Atmosphäre schaffen, in der sich alle sicher und willkommen fühlen. Bei Fragen stehen wir dir sehr gerne zur Verfügung. <a href='mailto:awareness@suicmc25.ch'>E-Mail</a> ",
          "en": "Our awareness concept is particularly close to our hearts. Mindfulness and consideration in how we treat each other are our top priorities. Personal boundaries must be respected, and respectful interactions are a given. Please take the time to carefully read our awareness concept – only together can we create an atmosphere where everyone feels safe and welcome. If you have any questions, we are happy to assist you. <a href='mailto:awareness@suicmc25.ch'>e-mail</a>"
        }
      },
      "sbpc": {
        "titel": {
          "de": "Awareness ",
          "en": "Awareness "
        },
        "text1": {
          "de": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis felis nec nisi viverra cursus. Aenean eget scelerisque leo. Sed aliquet malesuada erat.",
          "en": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis felis nec nisi viverra cursus. Aenean eget scelerisque leo. Sed aliquet malesuada erat."
        }
      },
      "pre ecmc": {
        "titel": {
          "de": "Awareness ",
          "en": "Awareness "
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
