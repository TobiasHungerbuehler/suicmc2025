import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { NavigationService } from "../services/navigation.service";
import { StoererKontaktComponent } from "../shared/stoerer-kontakt/stoerer-kontakt.component";
import { StoererAwarenessGuideComponent } from "../shared/stoerer-awareness-guide/stoerer-awareness-guide.component";
import { SportInklusivTxtComponent } from "./sport-inklusiv-txt/sport-inklusiv-txt.component";

@Component({
    selector: "app-sport-inklusiv",
    standalone: true,
    imports: [CommonModule, StoererKontaktComponent, StoererAwarenessGuideComponent, SportInklusivTxtComponent],
    templateUrl: "./sport-inklusiv.component.html",
    styleUrl: "./sport-inklusiv.component.scss",
})
export class SportInklusivComponent implements OnInit {
    currentLanguage: "de" | "en" = "de";

    constructor(private navigationService: NavigationService) {}

    ngOnInit(): void {
        this.navigationService.currentLanguage$.subscribe((language) => {
            const validLanguage = language.toLowerCase() as "de" | "en";
            if (validLanguage) {
                this.currentLanguage = validLanguage;
            }
        });
    }
}
