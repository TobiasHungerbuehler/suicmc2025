import { CommonModule } from "@angular/common";
import { Component, OnInit, AfterViewInit } from "@angular/core";
import { NavigationService } from "../../services/navigation.service";

// exakt wie bei dir
type RouteType = "suicmc" | "sbpc" | "pre ecmc";

@Component({
    selector: "app-instagram",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./instagram.component.html",
    styleUrl: "./instagram.component.scss",
})
export class InstagramComponent implements OnInit, AfterViewInit {
    currentRoute: RouteType = "suicmc";
    currentLanguage: "de" | "en" = "de";

    constructor(private navigationService: NavigationService) {}

    text = {
        unserVerein: {
            titel: { de: "INSTAGRAM", en: "INSTAGRAM" },
            p1: { de: "", en: "" },
            button: { de: "Folge uns auf Instagram", en: "Follow us on Instagram" },
        },
    };

    instagramUrl = "https://www.instagram.com/suicmc25_st.gallen";

    // 🔗 deine 9 Beiträge (Permalinks reichen; UTM kann weg)
    permalinks: string[] = ["https://www.instagram.com/reel/DNBjx2cMTrd/", "https://www.instagram.com/p/DMk3ZkBt6TW/", "https://www.instagram.com/reel/DMc2gOgtiVv/", "https://www.instagram.com/p/DMVjj48tG8m/", "https://www.instagram.com/reel/DMGaxVEtvDU/", "https://www.instagram.com/reel/DL6rYqtNvwu/", "https://www.instagram.com/reel/DLia0U4NV1Z/", "https://www.instagram.com/p/DLxJFXDNWIS/", "https://www.instagram.com/p/DLSxkFFMhlC/"];

    ngOnInit(): void {
        this.navigationService.currentRoute$.subscribe((route) => {
            const validRoute = route?.toLowerCase() as RouteType;
            if (validRoute) this.currentRoute = validRoute;
        });

        this.navigationService.currentLanguage$.subscribe((language) => {
            const validLanguage = language?.toLowerCase() as "de" | "en";
            if (validLanguage) this.currentLanguage = validLanguage;
        });
    }

    ngAfterViewInit(): void {
        this.processInstagramEmbeds();
    }

    private processInstagramEmbeds() {
        const w = window as any;
        // Falls das Script schon da ist:
        if (w.instgrm?.Embeds?.process) {
            w.instgrm.Embeds.process();
            return;
        }
        // Sonst einmalig laden und dann verarbeiten:
        const existing = document.querySelector('script[src*="instagram.com/embed.js"]');
        if (!existing) {
            const s = document.createElement("script");
            s.async = true;
            s.src = "https://www.instagram.com/embed.js";
            s.onload = () => w.instgrm?.Embeds?.process?.();
            document.body.appendChild(s);
        }
    }

    getText(part: "titel" | "p1" | "button"): string {
        return this.text.unserVerein[part][this.currentLanguage];
    }
}
