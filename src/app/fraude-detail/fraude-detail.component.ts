import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { PreloaderComponent } from "../preloader/preloader.component";
import ServicesService from '../services.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fraude-detail',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, PreloaderComponent , FormsModule, HttpClientModule, CommonModule],
  templateUrl: './fraude-detail.component.html',
  styleUrl: './fraude-detail.component.css',
    providers: [ServicesService]
  
})
export class FraudeDetailComponent implements OnInit {
  categories: any[] = []; // Define categories array

  constructor(private servicesService: ServicesService) {} // Inject the service

  ngOnInit() {
    this.fetchCategories(); // Fetch categories on component initialization
  }

  fetchCategories() {
    this.servicesService.getCategories().subscribe(response => {
      if (response.status === 'success') {
        this.categories = response.data.map((category: { image: any; }) => ({
          ...category,
          image: category.image || 'assets/images/default-category.png' // Default image if none provided
        }));
      } else {
        console.error('Failed to fetch categories', response.message);
      }
    }, error => {
      console.error('Failed to fetch categories', error);
    });
  }
}
