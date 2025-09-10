import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { NavigationService } from "../../services/navigation.service";

type RouteType = "suicmc" | "sbpc" | "pre ecmc";

@Component({
    selector: "app-results",
    standalone: true,
    imports: [CommonModule, MatExpansionModule, MatIconModule],
    templateUrl: "./results.component.html",
    styleUrl: "./results.component.scss",
})
export class ResultsComponent {
    currentRoute: RouteType = "suicmc";
    currentLanguage: "de" | "en" = "de";
    readonly panelOpenState = signal(false);

    results = [
        {
            title: { de: "Mainrace", en: "Mainrace" },
            pdfs: [
                { label: "RESULTS_MAINRACE_WTNB", url: "" },
                { label: "RESULTS_MAINRACE_OPEN", url: "" },
            ],
        },
        {
            title: { de: "Inklusion", en: "Inclusion" },
            pdfs: [{ label: "RESULTS_INKLUSION", url: "" }],
        },
        {
            title: { de: "Cargo", en: "Cargo" },
            pdfs: [{ label: "RESULTS_CARGO_WTNB", url: "" }],
        },
    ];

    constructor(private navigationService: NavigationService) {}

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
}

