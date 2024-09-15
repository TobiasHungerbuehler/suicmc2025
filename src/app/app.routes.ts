import { Routes} from '@angular/router';
import { SuicmcComponent } from './suicmc/suicmc.component';
import { SbpcComponent } from './sbpc/sbpc.component';
import { PreEcmcComponent } from './pre-ecmc/pre-ecmc.component';


export const routes: Routes = [
    { path: '', component: SuicmcComponent },
    { path: 'sbpc', component: SbpcComponent },
    { path: 'preecmc', component: PreEcmcComponent },
];
