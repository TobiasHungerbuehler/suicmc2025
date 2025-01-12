import { HttpClientModule, HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core"; // OnInit importieren
import { FormsModule, NgForm } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NavigationService } from "../../services/navigation.service";

@Component({
    selector: "app-registration-sbpc",
    standalone: true,
    imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
    templateUrl: "./registration-sbpc.component.html",
    styleUrl: "./registration-sbpc.component.scss",
})
export class RegistrationSbpcComponent implements OnInit {
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

    currentLanguage: "de" | "en" = "de"; // Standardwert für die Sprache

    feedbackOverlay = false;
    registration_successful = false;

    // Array zum Speichern der Startnummern
    //startnummern: any[] = [];

    // Variable für Fehlermeldungen
    //startnummerFehler: string = "";

    // Variable zur Steuerung der Anzeige der Startnummernliste
    //showStartnummern: boolean = false;

    constructor(private http: HttpClient, private navigationService: NavigationService) {}

    //scrolling to top
    //////////////////////////
    ngAfterViewInit() {
        // Verwende setTimeout, um sicherzustellen, dass das Element vollständig geladen ist
        setTimeout(() => {
            this.scrollToLast();
        }, 0); // Die Verzögerung von 0 sorgt dafür, dass der nächste Event Loop-Zyklus abgewartet wird
    }

    scrollToLast() {
        //irekt auf das Element zuzugreifen
        const element = document.getElementById("start");
        if (element) {
            console.log("Scrolling to last element");
            element.scrollIntoView({ behavior: "smooth" });
        } else {
            console.log("Element not found");
        }
    }

    ngOnInit() {
        // Abonniere die aktuelle Sprache
        this.navigationService.currentLanguage$.subscribe((language) => {
            const validLanguage = language.toLowerCase() as "de" | "en";
            if (validLanguage) {
                this.currentLanguage = validLanguage;
            }
        });
    }

    onSubmit(registrationForm: NgForm) {
        if (registrationForm.valid) {
            this.writeInDatabase();
        }
    }

    writeInDatabase() {
        // const headers = new HttpHeaders({
        //     "Content-Type": "application/json; charset=UTF-8", // Setze den Content-Type Header
        // });
        // this.http.post("https://suicmc2025.ch/suicmc_register.php", this.userData, { headers }).subscribe(
        //     (response) => {
        //         console.log("Erfolgreich registriert:", response);
        //         this.feedbackOverlay = true;
        //         this.registration_successful = true;
        //         // Bestätigungs-E-Mail senden
        //         this.sendConfirmationEmail();
        //     },
        //     (error) => {
        //         console.error("Fehler bei der Registrierung:", error);
        //         this.feedbackOverlay = true;
        //     }
        // );
    }

    sendConfirmationEmail() {
        //     const headers = new HttpHeaders({
        //         "Content-Type": "application/json; charset=UTF-8",
        //     });
        //     // Daten für das E-Mail-Skript vorbereiten
        //     const emailData = {
        //         vorname: this.userData.vorname,
        //         nachname: this.userData.nachname,
        //         spitzname: this.userData.spitzname,
        //         ort: this.userData.ort,
        //         firma: this.userData.firma,
        //         startnummer: this.userData.startnummer,
        //         email: this.userData.email,
        //         cargorace: this.userData.cargorace,
        //         mainrace: this.userData.mainrace,
        //         bergsprint: this.userData.bergsprint,
        //         skid: this.userData.skid,
        //         trackstand: this.userData.trackstand,
        //         footdown: this.userData.footdown,
        //         essen: this.userData.essen,
        //         housing: this.userData.housing,
        //         helfer: this.userData.helfer,
        //         bemerkung: this.userData.bemerkung,
        //         co: this.userData.co,
        //     };
        //     this.http.post("https://suicmc2025.ch/suicmc_sendMail.php", emailData, { headers }).subscribe(
        //         (response) => {
        //             console.log("Bestätigungs-E-Mail wurde gesendet:", response);
        //         },
        //         (error) => {
        //             console.error("Fehler beim Versenden der Bestätigungs-E-Mail:", error);
        //         }
        //     );
    }
}
