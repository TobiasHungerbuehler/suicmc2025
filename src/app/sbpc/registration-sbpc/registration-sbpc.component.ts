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
        teamname: "",
        cap_vorname: "",
        cap_nachname: "",
        cap_spitzname: "",
        cap_verein: "",
        cap_email: "",
        cap_essen: "",
        cap_housing: "",
        cap_helfer: "",
        sp1_vorname: "",
        sp1_nachname: "",
        sp1_spitzname: "",
        sp1_verein: "",
        sp1_email: "",
        sp1_essen: "",
        sp1_housing: "",
        sp1_helfer: "",
        sp2_vorname: "",
        sp2_nachname: "",
        sp2_spitzname: "",
        sp2_verein: "",
        sp2_email: "",
        sp2_essen: "",
        sp2_housing: "",
        sp2_helfer: "",
        sp3_vorname: "",
        sp3_nachname: "",
        sp3_spitzname: "",
        sp3_verein: "",
        sp3_email: "",
        sp3_essen: "",
        sp3_housing: "",
        sp3_helfer: "",
        bemerkung: "",
    };

    // userData = {
    //     teamname: "Fast Riders",
    //     cap_vorname: "Max",
    //     cap_nachname: "Mustermann",
    //     cap_spitzname: "Captain Max",
    //     cap_verein: "Speedy Bikers",
    //     cap_email: "tobylast.music@gmail.com",
    //     cap_essen: "vegetarisch",
    //     cap_housing: "ja",
    //     cap_helfer: "nein",
    //     sp1_vorname: "Anna",
    //     sp1_nachname: "Müller",
    //     sp1_spitzname: "Speedy",
    //     sp1_verein: "City Racers",
    //     sp1_email: "anna.mueller@example.com",
    //     sp1_essen: "vegan",
    //     sp1_housing: "nein",
    //     sp1_helfer: "ja",
    //     sp2_vorname: "Lukas",
    //     sp2_nachname: "Schmidt",
    //     sp2_spitzname: "Rocket",
    //     sp2_verein: "Urban Cyclists",
    //     sp2_email: "lukas.schmidt@example.com",
    //     sp2_essen: "keinWunsch",
    //     sp2_housing: "ja",
    //     sp2_helfer: "nein",
    //     sp3_vorname: "Sophie",
    //     sp3_nachname: "Klein",
    //     sp3_spitzname: "Thunder",
    //     sp3_verein: "Pedal Pushers",
    //     sp3_email: "sophie.klein@example.com",
    //     sp3_essen: "vegetarisch",
    //     sp3_housing: "nein",
    //     sp3_helfer: "ja",
    //     bemerkung: "Freuen uns auf das Event!",
    // };

    // Awareness gelesen kontroll variable in Formular
    awareness_gelesen = "";

    currentLanguage: "de" | "en" = "de"; // Standardwert für die Sprache

    feedbackOverlay = false;
    registration_successful = false;

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
        console.log("Initialisiertes userData:", this.userData);
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
            console.log(this.userData);
        }
    }

    writeInDatabase() {
        console.log("Original UserData:", this.userData);
        console.log("Stringified JSON:", JSON.stringify(this.userData));

        const headers = new HttpHeaders({
            "Content-Type": "application/json; charset=UTF-8", // Setze den Content-Type Header
        });
        this.http.post("https://suicmc2025.ch/sbpc_register.php", this.userData, { headers }).subscribe(
            (response) => {
                console.log("Erfolgreich registriert:", response);
                this.feedbackOverlay = true;
                this.registration_successful = true;
                // Bestätigungs-E-Mail senden
                this.sendConfirmationEmail();
            },
            (error) => {
                console.error("Fehler bei der Registrierung:", error);
                this.feedbackOverlay = true;
            }
        );
    }

    sendConfirmationEmail() {
        const headers = new HttpHeaders({
            "Content-Type": "application/json; charset=UTF-8",
        });
        // Daten für das E-Mail-Skript vorbereiten
        const emailData = {
            teamname: this.userData.teamname,
            cap_vorname: this.userData.cap_vorname || "",
            cap_nachname: this.userData.cap_nachname || "",
            cap_spitzname: this.userData.cap_spitzname || "",
            cap_verein: this.userData.cap_verein || "",
            cap_email: this.userData.cap_email || "",
            cap_essen: this.userData.cap_essen || "",
            cap_housing: this.userData.cap_housing || "",
            cap_helfer: this.userData.cap_helfer || "",
            sp1_vorname: this.userData.sp1_vorname || "",
            sp1_nachname: this.userData.sp1_nachname || "",
            sp1_spitzname: this.userData.sp1_spitzname || "",
            sp1_verein: this.userData.sp1_verein || "",
            sp1_email: this.userData.sp1_email || "",
            sp1_essen: this.userData.sp1_essen || "",
            sp1_housing: this.userData.sp1_housing || "",
            sp1_helfer: this.userData.sp1_helfer || "",
            sp2_vorname: this.userData.sp2_vorname || "",
            sp2_nachname: this.userData.sp2_nachname || "",
            sp2_spitzname: this.userData.sp2_spitzname || "",
            sp2_verein: this.userData.sp2_verein || "",
            sp2_email: this.userData.sp2_email || "",
            sp2_essen: this.userData.sp2_essen || "",
            sp2_housing: this.userData.sp2_housing || "",
            sp2_helfer: this.userData.sp2_helfer || "",
            sp3_vorname: this.userData.sp3_vorname || "",
            sp3_nachname: this.userData.sp3_nachname || "",
            sp3_spitzname: this.userData.sp3_spitzname || "",
            sp3_verein: this.userData.sp3_verein || "",
            sp3_email: this.userData.sp3_email || "",
            sp3_essen: this.userData.sp3_essen || "",
            sp3_housing: this.userData.sp3_housing || "",
            sp3_helfer: this.userData.sp3_helfer || "",
            bemerkung: this.userData.bemerkung || "",
        };

        this.http.post("https://suicmc2025.ch/sbpc_sendMail.php", emailData, { headers }).subscribe(
            (response) => {
                console.log("Bestätigungs-E-Mail wurde gesendet:", response);
            },
            (error) => {
                console.error("Fehler beim Versenden der Bestätigungs-E-Mail:", error);
            }
        );
    }

    text = [
        {
            text: {
                de: "<b>Die Community hat gewählt!</b> Wir spielen an den SBPC ein 4 vs. 4. Ein Mensch pro Team, darf von einem nicht Schweizer*innen Verein mitspielen. Die Teams sollen aber müssen nicht mixed sein!",
                en: "<b>The community has voted!</b>We play a 4 vs. 4 at the SBPC. One person per team may play from a non-Swiss club. The teams should but do not have to be mixed.",
            },
        },
        {
            text: {
                de: "Für die Übernachtung in der Unterkunft stehen euch die Kategorien WTNB und Open zur Auswahl. Denk daran einen Schlafsack und Mätteli einzupacken. Das Housing kosten 5.- CHF (pro Person) zusätzlich zur Anmeldegebühr. Alternativ können wir auch Stellplätze für Büssli / Camper anbieten. Die Anzahl der Stellplätze ist begrenzt. Ein Stellplatz kostet zusätzlich 10.- CHF (pro Bus) zur Anmeldegebühr.",
                en: "For overnight accommodation, you can choose between the WTNB and Open categories. Don’t forget to pack a sleeping bag and mat. The accommodation fee is 5.-CHF, in addition to the registration fee. Alternatively, we can offer parking spaces for camper vans or buses. The number of spots is limited, and each space costs an additional 10.- CHF on top of the registration fee.",
            },
        },
        {
            text: {
                de: "Möchtet ihr uns als Helfer*in unterstützen? Wir würden uns sehr über deine/eure Anmeldung freuen!",
                en: "Would you like to support us as a helper? We would be very happy to receive your sign-up!",
            },
        },
        {
            text: {
                de: 'Gemeinsam prägen wir unser Miteinander während dieser SUICMC und SBPC 2025. Es ist uns wichtig, dass du dich darüber informiert hast. Hast du unser Awareness Guide schon gelesen? Hier kannst du diesen abrufen: <a href="/awarenessguide">Awareness Guide</a>',
                en: 'Together, we shape how we interact with one another during this SUICMC and SBPC 2025. It is important to us that you are informed about this. Have you already read our Awareness Guide? You can access it here: <a href="/awarenessguide">Awareness Guide</a>',
            },
        },
    ];
}
