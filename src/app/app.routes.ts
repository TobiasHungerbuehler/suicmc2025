import { Routes, RouterModule } from "@angular/router";
import { SuicmcComponent } from "./suicmc/suicmc.component";
import { SbpcComponent } from "./sbpc/sbpc.component";
import { PreEcmcComponent } from "./pre-ecmc/pre-ecmc.component";
import { RegistrationSuicmcComponent } from "./suicmc/registration-suicmc/registration-suicmc.component";
import { AwarenessGuideComponent } from "./awareness-guide/awareness-guide.component";
import { NgModule } from "@angular/core";

export const routes: Routes = [
    { path: "", component: SuicmcComponent },
    { path: "registration", component: RegistrationSuicmcComponent },
    { path: "sbpc", component: SbpcComponent },
    { path: "preecmc", component: PreEcmcComponent },
    { path: "awarenessguide", component: AwarenessGuideComponent },
];
