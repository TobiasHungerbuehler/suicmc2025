import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { NavigationService } from "../../services/navigation.service";
import { RouterModule } from "@angular/router";

// Erstelle einen Union-Typ für die zulässigen Routen
type RouteType = "suicmc" | "sbpc" | "pre ecmc";

@Component({
    selector: "app-sponsoring",
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: "./sponsoring.component.html",
    styleUrl: "./sponsoring.component.scss",
})
export class SponsoringComponent implements OnInit {
    currentRoute: RouteType = "suicmc"; // Standardwert mit spezifischem Typ
    currentLanguage: "de" | "en" = "de"; // Standardwert für die Sprache
    constructor(private navigationService: NavigationService) {}

    sponsors = {
        gold: [
            {
                name: "",
                img: "",
                link: "",
            },
            {
                name: "",
                img: "",
                link: "",
            },
        ],
        silber: [
            {
                name: "Kornhausbräu	",
                img: "/assets/img/sponsoren/khb.png",
                link: "https://www.kornhausbraeu.ch",
            },
            {
                name: "Labor Team	",
                img: "assets/img/sponsoren/neu-logo-hum.svg",
                link: "https://www.laborteam.ch/",
            },
            {
                name: "Labordiagnostic St. Gallen West",
                img: "assets/img/sponsoren/LdSg_Logo_4x.png",
                link: "https://www.labordiagnostic.ch",
            },
            {
                name: "Pro Velo St.Gallen Appenzell	",
                img: "assets/img/sponsoren/SILBER_PROVELO_SGAP_gross_fa_01.jpg",
                link: "https://www.provelo.info",
            },
        ],
        bronze: [
            {
                name: "Veloblitz",
                img: "assets/img/sponsoren/BRONZE_Veloblitz_logo_pure_pantone_012.jpg",
                link: "https://www.veloblitz.ch/",
            },
            {
                name: "clevermobil",
                img: "assets/img/sponsoren/BRONZE_Logo_Clevermobil.jpg",
                link: "https://www.clevermobil.ch/",
            },
            {
                name: "VCS Sektion St.Gallen / Appenzell",
                img: "assets/img/sponsoren/BRONZE_Logo_VCS_CMYK.jpg",
                link: "https://www.verkehrsclub.ch/sektionen/st-gallen-appenzell",
            },

            {
                name: "St. Gallen-Bodensee Tourismus",
                img: "assets/img/sponsoren/BRONZE_Logo St.Gallen-Bodensee Tourismus RGB positiv.png",
                link: "https://www.st.gallen-bodensee.ch",
            },
            {
                name: "Kunstgiesserei St.Gallen AG",
                img: "assets/img/sponsoren/kunstgiesserei.png",
                link: "https://www.kunstgiesserei.ch",
            },
        ],
    };

    supporters: string[] = ["amiata", "Amt für Umwelt und Energie", "Associazione Saetta Verde", "Bäckerei Füger", "brewbee", "Camion Transport", "DirtySox", "EINSTOFFEN", "Frame of Mind", "FREITAG", "Goba AG", "IBG Engineering AG", "Kolb Rahmenbau", "Kryptonite", "Messaker", "Migros KulturProzent", "Mosterei Möhl", "Omnium", "RUGBY CLUB ST. GALLEN", "Seifenmuseum St.Gallen", "SqLab", "Swissconnect", "syndicom", "Tanner Werbetechnik AG", "velo&werk", "Velokurier Bern", "Velokurier Luzern-Zug", "Velokurier Winterthur", "SOB – Schweizerische Südostbahn", "Vesto AG"];

    text = {
        anmeldung: {
            suicmc: {
                titel: {
                    de: "WIR DANKEN EUCH!",
                    en: "WE THANK YOU!",
                },
                text1: {
                    de: "Ohne euch Alle wäre dieser Event nicht möglich! Wir finden eure Unterstützung grossartig.",
                    en: "Without every one of you, this event would not be possible! We find your support amazing.",
                },
            },
            sbpc: {
                titel: {
                    de: "WIR DANKEN EUCH!",
                    en: "WE THANK YOU!",
                },
                text1: {
                    de: "Ohne euch Alle wäre dieser Event nicht möglich! Wir finden eure Unterstützung grossartig.",
                    en: "Without every one of you, this event would not be possible! We find your support amazing.",
                },
            },
            "pre ecmc": {
                titel: {
                    de: "WIR DANKEN EUCH!",
                    en: "WE THANK YOU!",
                },
                text1: {
                    de: "Ohne euch Alle wäre dieser Event nicht möglich! Wir finden eure Unterstützung grossartig.",
                    en: "Without every one of you, this event would not be possible! We find your support amazing.",
                },
            },
        },
    };

    ngOnInit(): void {
        // Abonniere den aktuellen Routenstatus
        this.navigationService.currentRoute$.subscribe((route) => {
            const validRoute = route.toLowerCase() as RouteType;
            if (validRoute) {
                this.currentRoute = validRoute;
            }
        });

        // Abonniere die aktuelle Sprache
        this.navigationService.currentLanguage$.subscribe((language) => {
            const validLanguage = language.toLowerCase() as "de" | "en";
            if (validLanguage) {
                this.currentLanguage = validLanguage;
            }
        });
    }

    // Methode, um den Text für Titel oder Absätze dynamisch abzurufen
    getText(part: "titel" | "text1"): string {
        return this.text.anmeldung[this.currentRoute][part][this.currentLanguage];
    }

    // Methode, um den Text für Titel oder Absätze dynamisch abzurufen
    // getLink() {
    //     return this.text.anmeldung[this.currentRoute]["button"]["link"];
    // }
}
