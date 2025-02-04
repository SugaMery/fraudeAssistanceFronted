import { Component, OnInit } from '@angular/core';
import ServicesService from '../services.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [ServicesService]
})
export class HeaderComponent implements OnInit {
  categories: any[] = [];

  constructor(private servicesService: ServicesService) {}
  
  ngOnInit() {
    this.fetchCategories();
  console.log('HeaderComponent  ', this.categories);
  
  }

  fetchCategories() {
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

  openMobileNav() {
    const mobileNavWrapper = document.querySelector('.mobile-nav__wrapper');
    if (mobileNavWrapper) {
      mobileNavWrapper.classList.add('expanded');
    }
  }

  closeMobileNav() {
    const mobileNavWrapper = document.querySelector('.mobile-nav__wrapper');
    if (mobileNavWrapper) {
      mobileNavWrapper.classList.remove('expanded');
    }
  }
}
