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

    //sortierfunktion supporters
    splitIntoRows(columns: number): string[] {
        const sorted = [...this.supporters].sort((a, b) => a.localeCompare(b, "de-CH"));

        const perColumn = Math.ceil(sorted.length / columns);
        const grid: string[] = [];

        // Spaltenweise anordnen (wie visuell gewünscht)
        for (let i = 0; i < perColumn; i++) {
            for (let j = 0; j < columns; j++) {
                const index = j * perColumn + i;
                if (sorted[index]) {
                    grid.push(sorted[index]);
                }
            }
        }

        return grid;
    }

    sponsors = {
        gold: [
            {
                name: "St.Galler Stadtwerke",
                img: "/assets/img/sponsoren/sgsw.png",
                link: "https://www.sgsw.ch/",
            },
            {
                name: "FISBA",
                img: "/assets/img/sponsoren/fisba.png",
                link: "https://www.fisba.com/",
            },
            {
                name: "Hostcity",
                img: "/assets/img/sponsoren/St. Gallen logo 2694.png",
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

    supporters: string[] = [
        "Alena Lizier Tattoo & Art",
        "amiata",
        "Amt für Umwelt und Energie",
        "Associazione Saetta Verde",
        "brewbee",
        "Camion Transport",
        "Condecta AG",
        "DirtySox",
        "EINSTOFFEN",
        "Frame of Mind",
        "FREITAG",
        "Genossenschaft Tofurei Engel",
        "Goba AG",
        "Gruppetto",
        "Gutsch Haferdrink",
        "Habibi",
        "Headdy",
        "Hermann Bier",
        "IBG Engineering AG",
        "Käserei Muolen",
        "Kaffeehaus",
        "Knog",
        "Kolb Rahmenbau",
        "Komenda AG",
        "Kompotoi AG",
        "Kryptonite",
        "Kurierzentrale",
        "La Cyclone",
        "Messaker",
        "Migros KulturProzent",
        "Mosterei Möhl",
        "New Roots",
        "Omnium",
        "RUGBY CLUB ST. GALLEN",
        "Schnider AG Transport und Recycling",
        "Seifenmuseum St.Gallen",
        "SOB – Schweizerische Südostbahn",
        "Sport Schmetta GmbH",
        "SqLab",
        "SUICMC 2023 Bern",
        "Swissconnect",
        "syndicom",
        "Tanner Werbetechnik AG",
        "Trash Bags",
        "velo&werk",
        "Velafrica",
        "Velokurier Bern",
        "Velokurier Biel",
        "Velokurier Luzern-Zug",
        "Velokurier St. Gallen",
        "Velokurier Winterthur",
        "Veloplus",
        "Vélocité",
        "Verein Glace-Velo St.Gallen",
        "Vesto AG",
        "Vitelli Velobedarf AG",
    ];

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

    columns = 4;

    ngOnInit(): void {
        // Sprache + Route abonnieren
        this.navigationService.currentRoute$.subscribe((route) => {
            const validRoute = route.toLowerCase() as RouteType;
            if (validRoute) this.currentRoute = validRoute;
        });
        this.navigationService.currentLanguage$.subscribe((language) => {
            const validLanguage = language.toLowerCase() as "de" | "en";
            if (validLanguage) this.currentLanguage = validLanguage;
        });

        // Aktuelle Spaltenanzahl setzen
        this.setColumns();
        window.addEventListener("resize", () => this.setColumns());
    }

    setColumns(): void {
        const width = window.innerWidth;
        if (width < 600) {
            this.columns = 2;
        } else if (width < 900) {
            this.columns = 3;
        } else {
            this.columns = 4;
        }
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
