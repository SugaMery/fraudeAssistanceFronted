import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';

export const routes: Routes = [
    { path: '', component: InscriptionComponent },
    { path: 'connexion', component: LoginComponent },
    { path: 'inscription', component: InscriptionComponent },
];
