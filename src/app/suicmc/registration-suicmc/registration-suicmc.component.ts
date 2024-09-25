import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';  // OnInit importieren
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registration-suicmc',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  templateUrl: './registration-suicmc.component.html',
  styleUrls: ['./registration-suicmc.component.scss']
})
export class RegistrationSuicmcComponent implements OnInit {

  userData = {
    vorname: "",
    nachname: "",
    spitzname: "",
    ort: "",
    firma: "",
    startnummer: "",
    email: "",
    cargorace: "",
    mainrace: "",
    bergsprint: "",
    skid: "",
    trackstand: "",
    footdown: "",
    essen: "",
    housing: "",
    helfer: "",
    bemerkung: "",
    co: "OK",
  };

  feedbackOverlay = false;
  registration_successful = false;

  // Array zum Speichern der Startnummern
  startnummern: any[] = [];

  // Variable für Fehlermeldungen
  startnummerFehler: string = '';

    // Variable zur Steuerung der Anzeige der Startnummernliste
    showStartnummern: boolean = false;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getStartnummern();
  }

  // Funktion zum Abrufen der Startnummern
  getStartnummern() {
    this.http.get<any[]>('https://suicmc2025.ch/suicmc_get_startnummern.php')
      .subscribe(response => {
        this.startnummern = response.map(num => String(num).trim());
        this.startnummern.sort((a, b) => parseInt(a) - parseInt(b));
        console.log('Startnummern beim Laden:', this.startnummern);
      }, error => {
        console.error('Fehler beim Abrufen der Startnummern:', error);
      });
  }
  

  // Vergleichsfunktion, um zu prüfen, ob die Startnummer bereits verwendet wird
  isStartnummerUsed(): boolean {
    const eingabeStartnummer = String(this.userData.startnummer).trim();
    const vorhandeneStartnummern = this.startnummern.map(num => String(num).trim());
    const verwendet = vorhandeneStartnummern.includes(eingabeStartnummer);
    console.log(`Prüfung, ob Startnummer "${eingabeStartnummer}" verwendet wird: ${verwendet}`);
    return verwendet;
  }

  onSubmit(registrationForm: NgForm) {
    if (registrationForm.valid) {
      if (this.userData.startnummer) {
        // Startnummern erneut abrufen und dann prüfen
        this.http.get<any[]>('https://suicmc2025.ch/suicmc_get_startnummern.php')
          .subscribe(response => {
            this.startnummern = response;
            console.log('Aktualisierte Startnummern:', this.startnummern);

            if (this.isStartnummerUsed()) {
              console.log('Startnummer bereits vergeben.');
              this.startnummerFehler = 'Diese Startnummer ist bereits vergeben.';
              // Hier könntest du auch eine Fehlermeldung im UI anzeigen
            } else {
              this.startnummerFehler = '';
              this.writeInDatabase();
            }
          }, error => {
            console.error('Fehler beim Abrufen der Startnummern:', error);
            // Fehlerbehandlung
          });
      } else {
        // Wenn keine Startnummer eingegeben wurde, direkt in die Datenbank schreiben
        this.startnummerFehler = '';
        this.writeInDatabase();
      }
    }
  }

  writeInDatabase() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8'  // Setze den Content-Type Header
    });

    this.http.post('https://suicmc2025.ch/register.php', this.userData, { headers })
      .subscribe(response => {
        console.log('Erfolgreich registriert:', response);
        this.feedbackOverlay = true;
        this.registration_successful = true;
      }, error => {
        console.error('Fehler bei der Registrierung:', error);
        this.feedbackOverlay = true;
      });
  }

  anyRaceSelected() {
    return this.userData.mainrace || this.userData.cargorace || this.userData.bergsprint || this.userData.skid || this.userData.trackstand || this.userData.footdown;
  }

}
