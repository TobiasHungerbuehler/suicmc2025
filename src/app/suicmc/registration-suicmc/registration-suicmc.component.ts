import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';  // OnInit importieren
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-registration-suicmc',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],  // Füge hier HttpClientModule hinzu
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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getStartnummern();
    console.log('ngoninit');
    
  }

    // Funktion zum Abrufen der Startnummern
    getStartnummern() {
      this.http.get<any[]>('https://suicmc2025.ch/suicmc_get_startnummern.php')
        .subscribe(response => {
          this.startnummern = response;
          console.log('Startnummern:', this.startnummern);
        }, error => {
          console.error('Fehler beim Abrufen der Startnummern:', error);
        });
    }

  onSubmit(registrationForm: NgForm) {
    if (registrationForm.valid) {
      console.log('registration', this.userData);
  
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
  }
  

  anyRaceSelected() {
    return this.userData.mainrace || this.userData.cargorace || this.userData.bergsprint || this.userData.skid || this.userData.trackstand || this.userData.footdown;
  }


}
