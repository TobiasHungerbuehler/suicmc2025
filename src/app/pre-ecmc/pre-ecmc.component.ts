import { CommonModule } from "@angular/common";
import { Component, AfterViewInit } from "@angular/core";
import { StartComponent } from "../shared/start/start.component";
import { UnserVereinComponent } from "../shared/unser-verein/unser-verein.component";
import { AnmeldungComponent } from "../shared/anmeldung/anmeldung.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { SupportUsComponent } from "../shared/support-us/support-us.component";
import { StoererAwarenessGuideComponent } from "../shared/stoerer-awareness-guide/stoerer-awareness-guide.component";
import { VerhaltenComponent } from "../shared/verhalten/verhalten.component";
import { SponsoringComponent } from "../shared/sponsoring/sponsoring.component";
import { ProgrammPreEcmcComponent } from "./programm-pre-ecmc/programm-pre-ecmc.component";
import { InstagramComponent } from "../shared/instagram/instagram.component";
import { HelferComponent } from "../shared/helfer/helfer.component";
import { InfrastrukturLocationsComponent } from "../shared/infrastruktur-locations/infrastruktur-locations.component";

@Component({
    selector: "app-pre-ecmc",
    standalone: true,
    imports: [CommonModule, StartComponent, AnmeldungComponent, UnserVereinComponent, FooterComponent, SupportUsComponent, StoererAwarenessGuideComponent, HelferComponent, ProgrammPreEcmcComponent, InfrastrukturLocationsComponent, SponsoringComponent, InstagramComponent],
    templateUrl: "./pre-ecmc.component.html",
    styleUrl: "./pre-ecmc.component.scss",
})
export class PreEcmcComponent implements AfterViewInit {
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
