import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';


@Component({
    selector: 'app-header',
    imports: [CommonModule, RouterModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

  currentRoute: string = 'SUICMC'; // Standardwert
  showLanguageSelector = false;    // Steuert, ob der Language-Selector angezeigt wird
  isOverlayVisible = false; // Standardmäßig ist das Overlay ausgeblendet
  currentLanguage: string = 'de';  // Standardwert

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    // Abonniere den Service, um Änderungen der Route zu überwachen
    this.navigationService.currentRoute$.subscribe(route => {
      this.currentRoute = route;
    });

    // Abonniere die aktuelle Sprache
    this.navigationService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    });
  }

  // Änder sprache im Navigation Service
  changeLanguage(language: string): void {
    this.navigationService.setLanguage(language);
    this.showLanguageSelector = false; // Language-Selector nach Auswahl ausblenden
  }

  // Umschalten der Anzeige des Language-Selectors
  toggleLanguageSelector(): void {
    this.showLanguageSelector = !this.showLanguageSelector;
  }

  // mobile menu anzeigen
  toggleOverlay(): void {
    this.isOverlayVisible = !this.isOverlayVisible; 
  }


}
