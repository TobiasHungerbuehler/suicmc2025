import { CommonModule } from "@angular/common";
import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef, QueryList } from "@angular/core";
import { NavigationService } from "../../services/navigation.service";

type RouteType = "suicmc" | "sbpc" | "pre ecmc";

interface InstaPost {
    src: string;
    type: "image" | "video";
    link: string;
}

@Component({
    selector: "app-instagram",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./instagram.component.html",
    styleUrl: "./instagram.component.scss",
})
export class InstagramComponent implements OnInit, AfterViewInit {
    @ViewChildren("clip") clips!: QueryList<ElementRef<HTMLVideoElement>>;

    currentRoute: RouteType = "suicmc";
    currentLanguage: "de" | "en" = "de";

    constructor(private navigationService: NavigationService) {}

    text = {
        unserVerein: {
            titel: { de: "INSTAGRAM", en: "INSTAGRAM" },
            button: { de: "Folge uns auf Instagram", en: "Follow us on Instagram" },
        },
    };

    instagramUrl = "https://www.instagram.com/suicmc25_st.gallen";

    posts: InstaPost[] = [
        { src: "assets/insta/527508223_1188660369969134_5184272593645205898_n.gif", type: "image", link: "https://www.instagram.com/p/1" },
        { src: "assets/insta/downloadgram.org_515753884_17889403422276770_1625861277151893216_n.jpg", type: "image", link: "https://www.instagram.com/p/2" },
        { src: "assets/insta/downloadgram.org_522661738_17891095374276770_1670701878940595859_n.jpg", type: "image", link: "https://www.instagram.com/p/3" },
        { src: "assets/insta/downloadgram.org_524811054_17891816568276770_214449539655147077_n.webp", type: "image", link: "https://www.instagram.com/p/4" },
        { src: "assets/insta/downloadgram.org_AQO2f3eUsCX1kzztxkAdcqnp97EuP3o_ATPwL_vILebj0j1pgyXNQ5umVMWlcVkiTI9yQcvypiLLs1nu4akNzLPF4-8Hexj0QYnssGY.mp4", type: "video", link: "https://www.instagram.com/p/5" },
        { src: "assets/insta/downloadgram.org_AQOiUHMyDFSZCm5IlX5tyt7k5k8vwr3z-Ial74v0SK8QGGDe6q4Ag_GP_GUc-AZzbKUZzcFxoeEInL6dObnMnNENY07jgPu0QsUUwuU.mp4", type: "video", link: "https://www.instagram.com/p/6" },
        { src: "assets/insta/downloadgram.org_AQP7hgwpg0XUANbWONdyxxXN5qpYbePE2-efaPaDbHn56b29-VgtzUvHjR8GAyNZ4PxInpxgI_q3nCMTxyN2E_iUKfSYymBSV3ln2Sg.mp4", type: "video", link: "https://www.instagram.com/p/7" },
        { src: "assets/insta/downloadgram.org_AQPNGz39pctjlyCK93Q6Wb7ulTWpUZckoA6qKm0FCNMqbRD4v-R7JL9mOODf5N47NUQR_vjmVSP7I4_UxK5v-NuZ8zIyDdQUTh9RtZ0.mp4", type: "video", link: "https://www.instagram.com/p/8" },
        { src: "assets/insta/downloadgram.org_AQPoE-O0xyuS6wc7T9o64NX5YfKqsOjVEYn9xcRKFbe-C6OV_YMBl-N2KNZc4uDXFmFFA1fL6UNSCycFolnqv6cQkk7Bpl0BMzg50pA.mp4", type: "video", link: "https://www.instagram.com/p/9" },
    ];

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
        const enforceMute = (v: HTMLVideoElement) => {
            v.muted = true;
            v.defaultMuted = true;
            v.volume = 0;
            v.addEventListener("volumechange", () => {
                if (!v.muted || v.volume !== 0) {
                    v.muted = true;
                    v.volume = 0;
                }
            });
        };

        // initial
        this.clips.forEach((ref) => enforceMute(ref.nativeElement));
        // falls ngFor später neu rendert
        this.clips.changes.subscribe((list: QueryList<ElementRef<HTMLVideoElement>>) => {
            list.forEach((ref) => enforceMute(ref.nativeElement));
        });
    }

    getText(part: "titel" | "button"): string {
        return this.text.unserVerein[part][this.currentLanguage];
    }
}
