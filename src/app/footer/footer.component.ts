import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import ServicesService from '../services.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  providers: [ServicesService]
})
export class FooterComponent {
  categories: any[] = [];
  constructor(private servicesService: ServicesService) {}

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

  ngOnInit() {
    this.fetchCategories();
  }
}
