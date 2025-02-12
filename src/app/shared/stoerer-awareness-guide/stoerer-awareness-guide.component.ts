import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-stoerer-awareness-guide",
    standalone: true,
    imports: [],
    templateUrl: "./stoerer-awareness-guide.component.html",
    styleUrl: "./stoerer-awareness-guide.component.scss",
})
export class StoererAwarenessGuideComponent {
    constructor(private router: Router) {}

    navigateToAwarenessGuide(): void {
        this.router.navigate(["/awarenessguide"]);
    }
}
