import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration-suicmc',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],  // Füge hier HttpClientModule hinzu
  templateUrl: './registration-suicmc.component.html',
  styleUrls: ['./registration-suicmc.component.scss']
})
export class RegistrationSuicmcComponent {

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

  constructor(private http: HttpClient) {}

  onSubmit(registrationForm: NgForm) {
    if (registrationForm.valid) {
      console.log('registration', this.userData);
  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8'  // Setze den Content-Type Header
      });
  
      this.http.post('https://suicmc2025.ch/register.php', this.userData, { headers })
        .subscribe(response => {
          console.log('Erfolgreich registriert:', response);
        }, error => {
          console.error('Fehler bei der Registrierung:', error);
        });
    }
  }
  

  anyRaceSelected() {
    return this.userData.mainrace || this.userData.cargorace || this.userData.bergsprint || this.userData.skid || this.userData.trackstand || this.userData.footdown;
  }
}
