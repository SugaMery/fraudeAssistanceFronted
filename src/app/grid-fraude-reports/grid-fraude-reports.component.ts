import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { PreloaderComponent } from "../preloader/preloader.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-grid-fraude-reports',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, PreloaderComponent , FormsModule, HttpClientModule, CommonModule],
  templateUrl: './grid-fraude-reports.component.html',
  styleUrl: './grid-fraude-reports.component.css',
  providers: [ServicesService]
})
export class GridFraudeReportsComponent implements OnInit {
  categories: any[] = [];
  reports: any[] = [];
  selectedCategoryId: string | null = null;
  currentPage: number = 1;
  totalPages: number = 1;
  reportsPerPage: number = 10;
  searchQuery: string = '';

  constructor(private servicesService: ServicesService) {}

  ngOnInit() {
    this.getCategories();
    this.getReports();
  }

  getCategories() {
    this.servicesService.getCategories().subscribe((data: any) => {
      this.categories = data.data;
    });
  }

  getReports() {
    const categoryId = this.selectedCategoryId ? this.selectedCategoryId : '24';
    this.servicesService.getReportsCategory(Number(categoryId)).subscribe((data: any) => {
      this.reports = data.data;
      this.totalPages = Math.ceil(this.reports.length / this.reportsPerPage);
    });
  }

  onCategorySelect(categoryId: string) {
    this.selectedCategoryId = categoryId;
    this.currentPage = 1;
    console.log('categoryId', categoryId);
    this.getReports();
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  get totalPagesArray() {
    return Array(this.totalPages).fill(0).map((x, i) => i + 1);
  }

  get paginatedReports() {
    const start = (this.currentPage - 1) * this.reportsPerPage;
    const end = start + this.reportsPerPage;
    return this.reports.slice(start, end);
  }

  onSearch(event: Event) {
    event.preventDefault();
    // Implement search functionality here
    console.log('Search query:', this.searchQuery);
  }
}
