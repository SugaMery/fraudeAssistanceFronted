import { Component } from '@angular/core';
import { PreloaderComponent } from "../preloader/preloader.component";
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [PreloaderComponent, FooterComponent, HeaderComponent],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {

}
