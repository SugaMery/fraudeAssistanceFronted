import { Component, OnInit, Renderer2 } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { PreloaderComponent } from "../preloader/preloader.component";
import ServicesService from '../services.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fraude-detail',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, PreloaderComponent , FormsModule, HttpClientModule, CommonModule],
  templateUrl: './fraude-detail.component.html',
  styleUrls: ['./fraude-detail.component.css'],
  providers: [ServicesService]
})
export class FraudeDetailComponent implements OnInit {
  categories: any[] = [];
  id!: string;
  titre!: string;
  report: any; // Add this line to declare a report property
  comments: any[] = []; // Add a property to hold the comments
  newComment: any = {}; // Add this line to declare a newComment property
  private scripts: string[] = [
    '/assets/js/jquery-3.6.0.min.js',
    '/assets/js/bootstrap.bundle.min.js',
    '/assets/js/jarallax.min.js',
    '/assets/js/jquery.ajaxchimp.min.js',
    '/assets/js/jquery.appear.min.js',
    '/assets/js/swiper.min.js',
    '/assets/js/jquery.magnific-popup.min.js',
    '/assets/js/jquery.validate.min.js',
    '/assets/js/odometer.min.js',
    '/assets/js/wNumb.min.js',
    '/assets/js/wow.js',
    '/assets/js/isotope.js',
    '/assets/js/owl.carousel.min.js',
    '/assets/js/jquery-ui.js',
    '/assets/js/jquery.nice-select.min.js',
    '/assets/js/marquee.min.js',
    '/assets/js/aos.js',
    '/assets/js/gsap/gsap.js',
    '/assets/js/gsap/ScrollTrigger.js',
    '/assets/js/script.js'
  ];
  private scriptElements: HTMLScriptElement[] = [];

  constructor(private renderer: Renderer2, private servicesService: ServicesService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.loadScripts();
    this.fetchCategories();
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.titre = params['titre'];
    });
    this.fetchReportById(this.id); 
    this.fetchReports(); // Fetch reports on init
    this.fetchComments(); // Fetch comments on init
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
  reports: any[] = []; // Add a property to hold the reports

  private fetchReports() {
    this.servicesService.getReports().subscribe(response => {
      if (response.status === 'success') {
        this.reports = response.data;
        console.log('Reports:', this.reports);
      } else {
        console.error('Failed to fetch reports', response.message);
      }
    }, error => {
      console.error('Failed to fetch reports', error);
    });
  }
 
  private removeScripts() {
    this.scriptElements.forEach(scriptElement => {
      this.renderer.removeChild(document.body, scriptElement);
    });
    this.scriptElements = [];
  }

  fetchCategories() {
    this.servicesService.getCategories().subscribe(response => {
      if (response.status === 'success') {
        this.categories = response.data.map((category: { image: any; }) => ({
          ...category,
          image: category.image || '/assets/images/default-category.png'
        }));
      } else {
        console.error('Failed to fetch categories', response.message);
      }
    }, error => {
      console.error('Failed to fetch categories', error);
    });
  }

  // Add this new method to fetch report details by ID
  fetchReportById(id: string) {
    this.servicesService.getReport(Number(id)).subscribe(response => {
      if (response.status === 'success') {
        this.report = response.data;
        console.log('Report:', this.report);
      } else {
        console.error('Failed to fetch report', response.message);
      }
    }, error => {
      console.error('Failed to fetch report', error);
    });
  }

  // Add this method to fetch comments
  fetchComments() {
    this.servicesService.getComments().subscribe(response => {
      if (response.status === 'success') {
        this.comments = response.data;
        console.log('Comments:', this.comments);
      } else {
        console.error('Failed to fetch comments', response.message);
      }
    }, error => {
      console.error('Failed to fetch comments', error);
    });
  }

  // Add this method to add a new comment with review
  addComment(comment: any) {
    comment.report_id = this.report.id;
    comment.nom = comment.username || 'Anonymous';
    comment.email = comment.email || 'Anonymous';
    comment.content = comment.text || 'No comment';
    const commentUser ={
      "nom" : comment.nom,
      "email" : comment.email,
      "content" : comment.content,
      "report_id" : comment.report_id
    }
    console.log('Comments:', commentUser);
    this.servicesService.createComment(commentUser).subscribe(response => {
      if (response.status === 'success') {
        this.comments.push(response.data);
        console.log('Comment added:', response.data);
      } else {
        console.error('Failed to add comment', response.message);
      }
    }, error => {
      console.error('Failed to add comment', error);
    });
  }

  getKeywords(title: string, description: string): string[] {
    const text = `${title} ${description}`;
    const words = text.split(/\W+/).filter(word => word.length > 3);
    const wordCount: { [key: string]: number } = {};

    words.forEach(word => {
      word = word.toLowerCase();
      wordCount[word] = (wordCount[word] || 0) + 1;
    });

    return Object.keys(wordCount).sort((a, b) => wordCount[b] - wordCount[a]).slice(0, 10);
  }

  getInitials(name: string): string {
    if (!name) return '';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  }
}
