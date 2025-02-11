import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { PreloaderComponent } from "../preloader/preloader.component";

@Component({
  selector: 'app-grid-fraude-reports',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PreloaderComponent],
  templateUrl: './grid-fraude-reports.component.html',
  styleUrl: './grid-fraude-reports.component.css'
})
export class GridFraudeReportsComponent {

}
