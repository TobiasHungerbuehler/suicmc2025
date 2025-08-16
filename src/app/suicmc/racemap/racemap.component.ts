import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationService } from "../../services/navigation.service";

@Component({
    selector: "app-racemap",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./racemap.component.html",
    styleUrl: "./racemap.component.scss",
})
export class RacemapComponent {
    currentLanguage: "de" | "en" = "de";
    selectedImage: string | null = null;

    racemaps = [
        {
            img: "assets/racemaps/Pre-Racemap_MAINRACE_Suicmc2025.jpg",
            title: {
                de: "PRE-RACEMAP «MAINRACE»",
                en: "PRE-RACEMAP \u201cMAINRACE\u201d",
            },
            text: {
                de: "Das definitive Racemap erhältst du erst am Event – hier schon mal ein Vorgeschmack.",
                en: "You\u2019ll receive the final race map at the event – here\u2019s a sneak peek.",
            },
        },
        {
            img: "assets/racemaps/Pre-Racemap_CARGORACE_Suicmc2025.jpg",
            title: {
                de: "PRE-RACEMAP «CARGORACE»",
                en: "PRE-RACEMAP \u201cCARGORACE\u201d",
            },
            text: {
                de: "Das definitive Racemap erhältst du erst am Event – hier schon mal ein Vorgeschmack.",
                en: "You\u2019ll receive the final race map at the event – here\u2019s a sneak peek.",
            },
        },
    ];

    constructor(private navigationService: NavigationService) {}

    ngOnInit(): void {
        this.navigationService.currentLanguage$.subscribe((language) => {
            const validLanguage = language.toLowerCase() as "de" | "en";
            if (validLanguage) {
                this.currentLanguage = validLanguage;
            }
        });
    }

    openImage(path: string): void {
        this.selectedImage = path;
    }

    closeImage(): void {
        this.selectedImage = null;
    }
}

