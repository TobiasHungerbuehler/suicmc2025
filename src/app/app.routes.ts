import { Routes, RouterModule } from '@angular/router';
import { SuicmcComponent } from './suicmc/suicmc.component';
import { SbpcComponent } from './sbpc/sbpc.component';
import { PreEcmcComponent } from './pre-ecmc/pre-ecmc.component';
import { RegistrationSuicmcComponent } from './suicmc/registration-suicmc/registration-suicmc.component';


export const routes: Routes = [
    { path: '', component: SuicmcComponent },
    { path: 'registration', component: RegistrationSuicmcComponent},
    { path: 'sbpc', component: SbpcComponent },
    { path: 'preecmc', component: PreEcmcComponent },
];


