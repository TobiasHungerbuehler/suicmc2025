import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StartComponent } from "../shared/start/start.component";
import { UnserVereinComponent } from "../shared/unser-verein/unser-verein.component";
import { AnmeldungComponent } from "../shared/anmeldung/anmeldung.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { WasIstComponent } from "../shared/was-ist/was-ist.component";
import { AwarenessComponent } from "../shared/awareness/awareness.component";
import { SupportUsComponent } from "../shared/support-us/support-us.component";
import { filter } from "rxjs/operators";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import { routes } from "../app.routes";
import { StoererAwarenessGuideComponent } from "../shared/stoerer-awareness-guide/stoerer-awareness-guide.component";
import { VerhaltenComponent } from "../shared/verhalten/verhalten.component";

@Component({
    selector: "app-suicmc",
    imports: [CommonModule, StartComponent, AnmeldungComponent, UnserVereinComponent, FooterComponent, WasIstComponent, AwarenessComponent, SupportUsComponent, StoererAwarenessGuideComponent, VerhaltenComponent],
    templateUrl: "./suicmc.component.html",
    styleUrls: ["./suicmc.component.scss"]
})
export class SuicmcComponent implements AfterViewInit {
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
            console.log("Scrolling to last element");
            element.scrollIntoView({ behavior: "smooth" });
        } else {
            console.log("Element not found");
        }
    }
}
