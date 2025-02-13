import { Component, OnInit, AfterViewInit } from '@angular/core';
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
export class HeaderComponent implements OnInit, AfterViewInit {
  categories: any[] = [];
  dropdownOpen = false;

  constructor(private servicesService: ServicesService) {}
  
  ngOnInit() {
    this.fetchCategories();
    console.log('HeaderComponent  ', this.categories);
  }

  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      const dropdownToggle = document.getElementById('login-dropdown-toggle');
      const dropdown = document.getElementById('login-dropdown');

      if (dropdownToggle && dropdown) {
        dropdownToggle.addEventListener('click', function(event) {
          event.preventDefault();
          if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
            dropdown.style.opacity = '0';
            dropdown.style.visibility = 'hidden';
          } else {
            dropdown.style.display = 'block';
            dropdown.style.opacity = '1';
            dropdown.style.visibility = 'visible';
          }
        });

        dropdown.addEventListener('mouseleave', function() {
          setTimeout(() => {
            dropdown.style.display = 'none';
            dropdown.style.opacity = '0';
            dropdown.style.visibility = 'hidden';
          }, 300); // Delay to allow moving the mouse to the dropdown
        });
      }
    }
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

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  openDropdown() {
    this.dropdownOpen = true;
  }

  closeDropdown() {
    this.dropdownOpen = false;
  }

  isUserLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token !== null;
  }

  getUserFullName(): string {
    // Implement your logic to get the user's full name
    return 'John Doe'; // Placeholder implementation
  }
}
