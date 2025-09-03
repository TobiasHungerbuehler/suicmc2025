import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { NavigationService } from "../../services/navigation.service";
import { RouterModule } from "@angular/router";

type RouteType = "suicmc" | "sbpc" | "pre ecmc";

@Component({
    selector: "app-lineup",
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: "./lineup.component.html",
    styleUrl: "./lineup.component.scss",
})
export class LineupComponent implements OnInit {
    currentRoute: RouteType = "suicmc";
    currentLanguage: "de" | "en" = "de";

    constructor(private navigationService: NavigationService) {}

    text = {
        lineup: {
            titel: {
                de: "LINE-UP",
                en: "LINE-UP",
            },
            text1: {
                de: `
<strong>Freitag, 05. 09. 2025 | Türöffnung 20 Uhr</strong><br>
Grabenhalle, Unterer Graben 17, 9000 St. Gallen<br>
Abendkasse Gäste-Eintritt: 20 CHF<br><br>
<strong class="artist">The Sound Monkeys:</strong> <span class="genre">Indie Rock</span><br>
<strong class="artist">Flanke:</strong> <span class="genre">Punk Rock</span><br>
<strong class="artist">PaTee & P-Beat:</strong> <span class="genre">Electro, DnB</span><br><br>
<em>DJ’s: Madis, RuuDC, Naurasta Selecta, Schatzmeister Fritz</em>
      `,
                en: `
<strong>Friday, 05. 09. 2025 | Doors open at 8:00 PM</strong><br>
Grabenhalle, Unterer Graben 17, 9000 St. Gallen<br>
Guest admission at the door: CHF 20<br><br>
<strong class="artist">The Sound Monkeys:</strong> <span class="genre">Indie Rock</span><br>
<strong class="artist">Flanke:</strong> <span class="genre">Punk Rock</span><br>
<strong class="artist">PaTee & P-Beat:</strong> <span class="genre">Electro, DnB</span><br><br>
<em>DJ’s: Madis, RuuDC, Naurasta Selecta, Schatzmeister Fritz</em>
      `,
            },
            text2: {
                de: `
<strong>Samstag, 06. 09. 2025 | Türöffnung 20 Uhr</strong><br>
Grabenhalle, Unterer Graben 17, 9000 St. Gallen<br>
Abendkasse Gäste-Eintritt: 20 CHF<br><br>
<strong class="artist">Depat Milieu:</strong> <span class="genre">Hip Hop</span><br>
<strong class="artist">Gunda Wechee & Friends:</strong> <span class="genre">Reggae, Hip Hop</span><br>
<strong class="artist">Tembo30:</strong> <span class="genre">Electro</span><br><br>
<em>DJ’s: Snatch, YPB</em>
      `,
                en: `
<strong>Saturday, 06. 09. 2025 | Doors open at 8:00 PM</strong><br>
Grabenhalle, Unterer Graben 17, 9000 St. Gallen<br>
Guest admission at the door: CHF 20<br><br>
<strong class="artist">Depat Milieu:</strong> <span class="genre">Hip Hop</span><br>
<strong class="artist">Gunda Wechee & Friends:</strong> <span class="genre">Reggae, Hip Hop</span><br>
<strong class="artist">Tembo30:</strong> <span class="genre">Electro</span><br><br>
<em>DJ’s: Snatch, YPB</em>
      `,
            },
            text3: {
                de: `
<strong>Sonntag, 07. 09. 2025 | Türöffnung 19 Uhr</strong><br>
Schwarzer Engel, Engelgasse 22, 9000 St. Gallen<br>
<strong class="artist">Dj Naurasta Selecta</strong><br>
<strong class="artist">Dj Snatch</strong><br>
      `,
                en: `
<strong>Sunday, 07. 09. 2025 | Doors open at 7:00 PM</strong><br>
Schwarzer Engel, Engelgasse 22, 9000 St. Gallen<br>
<strong class="artist">Dj Naurasta Selecta</strong><br>
<strong class="artist">Dj Snatch</strong><br>

      `,
            },
        },
    };

    ngOnInit(): void {
        this.navigationService.currentRoute$.subscribe((route) => {
            const validRoute = route.toLowerCase() as RouteType;
            if (validRoute) {
                this.currentRoute = validRoute;
            }
        });

        this.navigationService.currentLanguage$.subscribe((language) => {
            const validLanguage = language.toLowerCase() as "de" | "en";
            if (validLanguage) {
                this.currentLanguage = validLanguage;
            }
        });
    }
    getText(part: "titel" | "text1"): string {
        return this.text.lineup[part][this.currentLanguage];
    }
}
