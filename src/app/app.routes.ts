import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeComponent } from './home/home.component';
import { SignalerFraudeComponent } from './signaler-fraude/signaler-fraude.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { FraudeDetailComponent } from './fraude-detail/fraude-detail.component';
import { GridFraudeReportsComponent } from './grid-fraude-reports/grid-fraude-reports.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'connexion', component: LoginComponent },
    { path: 'inscription', component: InscriptionComponent },
    { path: 'signaler-fraude', component: SignalerFraudeComponent },
    { path: 'success-page', component: SuccessPageComponent },
    { path: 'signalement', component: FraudeDetailComponent },
    { path: 'les-signalements', component: GridFraudeReportsComponent },
    { path: 'a-propos', component: AboutusComponent },
    { path: 'contact', component: ContactComponent },

];
