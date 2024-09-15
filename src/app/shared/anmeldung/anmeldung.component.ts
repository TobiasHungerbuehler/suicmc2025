import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

// Erstelle einen Union-Typ für die zulässigen Routen
type RouteType = 'suicmc' | 'sbpc' | 'pre ecmc';

@Component({
  selector: 'app-anmeldung',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anmeldung.component.html',
  styleUrls: ['./anmeldung.component.scss']
})
export class AnmeldungComponent implements OnInit {
  currentRoute: RouteType = 'suicmc'; // Standardwert mit spezifischem Typ
  currentLanguage: 'de' | 'en' = 'de';  // Standardwert für die Sprache

  constructor(private navigationService: NavigationService) {}

  text = {
    "anmeldung": {
      "suicmc": {
        "titel": {
          "de": "Anmeldung",
          "en": "Registration"
        },
        "text1": {
          "de": "Die Online – Anmeldung für die SUICMC 25 ist vom 1. Oktober 2024 bis zum 31. August 2025 geöffnet. Danach kannst du dich vor Ort anmelden. Die Anmeldegebühr beträgt 20.- CHF. Die Anmeldegebühr für WTNB ist freiwillig. Magst du mehr beisteuern – wir sind über jede zusätzliche Hilfe sehr dankbar. Eine Bestätigungsmail mit den Zahlungsinformationen, erhältst du nach der Anmeldung.",
          "en": "Online registration for SUICMC 25 is open from October 1, 2024 to August 31, 2025. After that, you can register on-site. The registration fee is 20.- CHF. The registration fee for WTNB is voluntary. If you'd like to contribute more, we greatly appreciate any additional support. You will receive a confirmation email with payment details after registration."
        },
        "button": {
          "de": "WEITER ZUR ONLINE ANMELDUNG",
          "en": "PROCEED TO ONLINE REGISTRATION"
        }
      },
      "sbpc": {
        "titel": {
          "de": "Anmeldung",
          "en": "Registration"
        },
        "text1": {
          "de": "Die Anmeldung für die SBPC 2025 öffnet im Dezember 2024.",
          "en": "Registration for SBPC 2025 opens in December 2024."
        },
        "button": {
          "de": "WEITER ZUR ONLINE ANMELDUNG",
          "en": "PROCEED TO ONLINE REGISTRATION"
        }
      },
      "pre ecmc": {
        "titel": {
          "de": "Anmeldung",
          "en": "Registration"
        },
        "text1": {
          "de": "Melde dich schon jetzt für die PRE-ECM an. Es findet einen viertägigen Group Ride von St. Gallen via München nach Salzburg statt. Direkt nach der SUICMC 2025.",
          "en": "Register now for the PRE-ECMC. A four-day group ride will take place from St. Gallen via Munich to Salzburg. Right after the SUICMC 2025."
        },
        "button": {
          "de": "WEITER ZUR ONLINE ANMELDUNG",
          "en": "PROCEED TO ONLINE REGISTRATION"
        }
      }
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
  getText(part: 'titel' | 'text1' | 'button'): string {
    return this.text.anmeldung[this.currentRoute][part][this.currentLanguage];
  }
}
