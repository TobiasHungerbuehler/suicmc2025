import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  // BehaviorSubject für den aktuellen Routenstatus
  private currentRouteSubject: BehaviorSubject<string> = new BehaviorSubject<string>('SUICMC');
  public currentRoute$: Observable<string> = this.currentRouteSubject.asObservable();

  // BehaviorSubject für die Sprachauswahl (Standard: 'de')
  private languageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('de');
  public currentLanguage$: Observable<string> = this.languageSubject.asObservable();

  constructor(private router: Router) {
    // Überwache die Navigation und aktualisiere die Route
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects;
      if (url.includes('sbpc')) {
        this.currentRouteSubject.next('SBPC');
      } else if (url.includes('preecmc')) {
        this.currentRouteSubject.next('PRE ECMC');
      } else {
        this.currentRouteSubject.next('SUICMC'); // Standardwert
      }
    });
  }

  // Methode, um den aktuellen Routenwert zu erhalten
  getCurrentRoute(): string {
    return this.currentRouteSubject.value;
  }

  // Methode zum Ändern der Sprache
  setLanguage(language: string): void {
    this.languageSubject.next(language);
    console.log(language);
    
  }

  // Methode, um die aktuelle Sprache zu erhalten
  getCurrentLanguage(): string {
    return this.languageSubject.value;
  }
}
