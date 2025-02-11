import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { PreloaderComponent } from "../preloader/preloader.component";
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-success-page',
  standalone: true,
  imports: [FooterComponent, PreloaderComponent,HeaderComponent],
  templateUrl: './success-page.component.html',
  styleUrl: './success-page.component.css'
})
export class SuccessPageComponent {

}
