import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private servicesService: ServicesService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedCategoryId = params['id'] || null;
      if( this.selectedCategoryId != null) {
        this.getReports();
        console.log('params', params['id']);
        console.log('selectedCategoryId', this.selectedCategoryId);
  
        this.onCategorySelect(params['id']);
        console.log('paramsfffffff', params['id']);
      }else{
        this.getAllReports();
      }
    });
    
    this.getCategories();
  }

  getCategories() {
    this.servicesService.getCategories().subscribe((data: any) => {
      this.categories = data.data;
    });
  }

  getReports() {
    const categoryId = this.selectedCategoryId;
    this.servicesService.getReportsCategory(Number(categoryId)).subscribe((data: any) => {
      this.reports = data.data;
      this.totalPages = Math.ceil(this.reports.length / this.reportsPerPage);
    });
  }

  getAllReports() {
    const categoryId = this.selectedCategoryId;
    this.servicesService.getReports().subscribe((data: any) => {
      this.reports = data.data;
      this.totalPages = Math.ceil(this.reports.length / this.reportsPerPage);
    });
  }


  onCategorySelect(categoryId: string) {
    this.selectedCategoryId = categoryId;
    this.currentPage = 1;
    console.log('categoryIdrrrrrrrrrrr', this.selectedCategoryId , categoryId == null , this.selectedCategoryId.length == 0 );
    if(this.selectedCategoryId.length == 0) {
      this.getAllReports();
    }else{
      this.getReports();
    }
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
    if (this.searchQuery.trim() !== '') {
      if (this.selectedCategoryId) {
        this.servicesService.searchReportsByCategory(Number(this.selectedCategoryId), this.searchQuery).subscribe((data: any) => {
          this.reports = data.data;
          this.totalPages = Math.ceil(this.reports.length / this.reportsPerPage);
        });
      } else {
        this.servicesService.searchReports(this.searchQuery).subscribe((data: any) => {
          this.reports = data.data;
          this.totalPages = Math.ceil(this.reports.length / this.reportsPerPage);
        });
      }
    } else {
      if (this.selectedCategoryId) {
        this.getReports();
      } else {
        this.getAllReports();
      }
    }
  }

  onSearchS() {
    if (this.searchQuery.trim() !== '') {
      if (this.selectedCategoryId) {
        this.servicesService.searchReportsByCategory(Number(this.selectedCategoryId), this.searchQuery).subscribe((data: any) => {
          this.reports = data.data;
          this.totalPages = Math.ceil(this.reports.length / this.reportsPerPage);
        });
      } else {
        this.servicesService.searchReports(this.searchQuery).subscribe((data: any) => {
          this.reports = data.data;
          this.totalPages = Math.ceil(this.reports.length / this.reportsPerPage);
        });
      }
    } else {
      if (this.selectedCategoryId) {
        this.getReports();
      } else {
        this.getAllReports();
      }
    }
  }
}
