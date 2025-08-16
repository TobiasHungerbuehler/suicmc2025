import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { StartComponent } from "../shared/start/start.component";
import { NavigationService } from "../services/navigation.service";
import { StoererKontaktComponent } from "../shared/stoerer-kontakt/stoerer-kontakt.component";
import { StoererSportInklusivComponent } from "../shared/stoerer-sport-inklusiv/stoerer-sport-inklusiv.component";
import { GuideTxtComponent } from "./guide-txt/guide-txt.component";
import { KontaktComponent } from "./kontakt/kontakt.component";
import { GlossarComponent } from "./glossar/glossar.component";
import { ActivatedRoute } from "@angular/router";
@Component({
    selector: "app-awareness-guide",
    standalone: true,
    imports: [CommonModule, StartComponent, StoererKontaktComponent, StoererSportInklusivComponent, GuideTxtComponent, KontaktComponent, GlossarComponent],
    templateUrl: "./awareness-guide.component.html",
    styleUrl: "./awareness-guide.component.scss",
})
export class AwarenessGuideComponent {
    currentRoute: string = "SUICMC"; // Standardwert
    showLanguageSelector = false; // Steuert, ob der Language-Selector angezeigt wird
    isOverlayVisible = false; // Standardmäßig ist das Overlay ausgeblendet
    currentLanguage: string = "de"; // Standardwert

    ngAfterViewInit() {
        // Verwende setTimeout, um sicherzustellen, dass das Element vollständig geladen ist
        setTimeout(() => {
            this.scrollToLast();
        }, 0); // Die Verzögerung von 0 sorgt dafür, dass der nächste Event Loop-Zyklus abgewartet wird
    }

    scrollToLast() {
        // Verwende document.getElementById(), um direkt auf das Element zuzugreifen
        const element = document.getElementById("start");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        } else {
            console.log("Element not found");
        }
    }
}
