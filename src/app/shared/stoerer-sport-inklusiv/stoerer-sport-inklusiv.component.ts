import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-stoerer-sport-inklusiv",
    standalone: true,
    templateUrl: "./stoerer-sport-inklusiv.component.html",
    styleUrl: "./stoerer-sport-inklusiv.component.scss",
})
export class StoererSportInklusivComponent {
    constructor(private router: Router) {}

    navigateToSportInklusiv(): void {
        this.router.navigate(["/sportinklusiv"]);
    }
}
