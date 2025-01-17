import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";

@Component({
    selector: "app-verhalten",
    standalone: true,
    imports: [CommonModule, MatExpansionModule],
    templateUrl: "./verhalten.component.html",
    styleUrl: "./verhalten.component.scss",
})
export class VerhaltenComponent {}
