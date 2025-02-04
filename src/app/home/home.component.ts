import { Component, Renderer2, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { PreloaderComponent } from "../preloader/preloader.component";
import { ServicesService } from '../services.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PreloaderComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ServicesService]
})
export class HomeComponent implements OnInit {
  categories: any[] = []; // Add a property to hold the categories

  private scripts: string[] = [
    'assets/js/jquery-3.6.0.min.js',
    'assets/js/bootstrap.bundle.min.js',
    'assets/js/jarallax.min.js',
    'assets/js/jquery.ajaxchimp.min.js',
    'assets/js/jquery.appear.min.js',
    'assets/js/swiper.min.js',
    'assets/js/jquery.magnific-popup.min.js',
    'assets/js/jquery.validate.min.js',
    'assets/js/odometer.min.js',
    'assets/js/wNumb.min.js',
    'assets/js/wow.js',
    'assets/js/isotope.js',
    'assets/js/owl.carousel.min.js',
    'assets/js/jquery-ui.js',
    'assets/js/jquery.nice-select.min.js',
    'assets/js/marquee.min.js',
    'assets/js/aos.js',
    'assets/js/gsap/gsap.js',
    'assets/js/gsap/ScrollTrigger.js',
    'assets/js/script.js'
  ];
  private scriptElements: HTMLScriptElement[] = [];

  constructor(private renderer: Renderer2, private servicesService: ServicesService) {} // Inject the service

  ngOnInit() {
    this.loadScripts();
    this.fetchCategories(); // Fetch categories on init
  }

  private loadScripts() {
    this.scripts.forEach(script => {
      const scriptElement = this.renderer.createElement('script');
      scriptElement.src = script;
      scriptElement.type = 'text/javascript';
      scriptElement.async = true;
      this.renderer.appendChild(document.body, scriptElement);
      this.scriptElements.push(scriptElement);
    });
  }

  private removeScripts() {
    this.scriptElements.forEach(scriptElement => {
      this.renderer.removeChild(document.body, scriptElement);
    });
    this.scriptElements = [];
  }

  private fetchCategories() {
    this.servicesService.getCategories().subscribe(response => {
      if (response.status === 'success') {
        this.categories = response.data;
      } else {
        console.error('Failed to fetch categories', response.message);
      }
    }, error => {
      console.error('Failed to fetch categories', error);
    });
  }
}
