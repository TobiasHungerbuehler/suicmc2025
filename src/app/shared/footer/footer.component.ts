import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

// Erstelle einen Union-Typ für die zulässigen Routen
type RouteType = 'suicmc' | 'sbpc' | 'pre ecmc';

@Component({
    selector: 'app-footer',
    imports: [CommonModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {

  currentRoute: RouteType = 'suicmc'; // Standardwert mit spezifischem Typ
  currentLanguage: 'de' | 'en' = 'de';  // Standardwert für die Sprache

  constructor(private navigationService: NavigationService) {}

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

  getFooterImage(): string {
    if (this.currentRoute === 'suicmc') {
      return 'assets/img/footer_suicmc.jpg';
    } else if (this.currentRoute === 'sbpc') {
      return 'assets/img/footer_sbpc.jpg';
    } else if (this.currentRoute === 'pre ecmc') {
      return 'assets/img/footer_pre_ecmc.jpg';
    } else {
      return ''; // Fallback-Bild oder leer lassen
    }
  }
  
  

}
