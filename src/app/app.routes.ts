import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeComponent } from './home/home.component';
import { SignalerFraudeComponent } from './signaler-fraude/signaler-fraude.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'connexion', component: LoginComponent },
    { path: 'inscription', component: InscriptionComponent },
    { path: 'signaler-fraude', component: SignalerFraudeComponent },

];
