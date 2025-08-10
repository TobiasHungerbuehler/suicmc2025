import { CommonModule } from "@angular/common";
import { Component, AfterViewInit } from "@angular/core";
import { StartComponent } from "../shared/start/start.component";
import { UnserVereinComponent } from "../shared/unser-verein/unser-verein.component";
import { AnmeldungComponent } from "../shared/anmeldung/anmeldung.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { WasIstComponent } from "../shared/was-ist/was-ist.component";
import { HelferComponent } from "../shared/helfer/helfer.component";
import { SupportUsComponent } from "../shared/support-us/support-us.component";
import { StoererAwarenessGuideComponent } from "../shared/stoerer-awareness-guide/stoerer-awareness-guide.component";
import { VerhaltenComponent } from "../shared/verhalten/verhalten.component";
import { SponsoringComponent } from "../shared/sponsoring/sponsoring.component";
import { ProgammSbpcComponent } from "./progamm-sbpc/progamm-sbpc.component";
import { RegistrationSbpcComponent } from "./registration-sbpc/registration-sbpc.component";
import { KarteComponent } from "../shared/karte/karte.component";
import { LineupComponent } from "../shared/lineup/lineup.component";
import { InstagramComponent } from "../shared/instagram/instagram.component";
import { InfrastrukturLocationsComponent } from "../shared/infrastruktur-locations/infrastruktur-locations.component";

@Component({
    selector: "app-sbpc",
    standalone: true,
    imports: [CommonModule, StartComponent, AnmeldungComponent, UnserVereinComponent, FooterComponent, WasIstComponent, HelferComponent, SupportUsComponent, StoererAwarenessGuideComponent, ProgammSbpcComponent, InfrastrukturLocationsComponent, SponsoringComponent, RegistrationSbpcComponent, KarteComponent, LineupComponent, InstagramComponent],
    templateUrl: "./sbpc.component.html",
    styleUrl: "./sbpc.component.scss",
})
export class SbpcComponent implements AfterViewInit {
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
