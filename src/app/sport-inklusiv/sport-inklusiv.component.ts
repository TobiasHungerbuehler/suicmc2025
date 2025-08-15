import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { StartComponent } from "../shared/start/start.component";
import { StoererKontaktComponent } from "../shared/stoerer-kontakt/stoerer-kontakt.component";
import { StoererAwarenessGuideComponent } from "../shared/stoerer-awareness-guide/stoerer-awareness-guide.component";
import { SportInklusivTxtComponent } from "./sport-inklusiv-txt/sport-inklusiv-txt.component";

@Component({
    selector: "app-sport-inklusiv",
    standalone: true,
    imports: [CommonModule, StartComponent, StoererKontaktComponent, StoererAwarenessGuideComponent, SportInklusivTxtComponent],
    templateUrl: "./sport-inklusiv.component.html",
    styleUrl: "./sport-inklusiv.component.scss",
})
export class SportInklusivComponent {}
