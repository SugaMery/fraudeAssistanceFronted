import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { PreloaderComponent } from "../preloader/preloader.component";
import { DropdownModule } from 'primeng/dropdown';
import { ServicesService } from '../services.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signaler-fraude',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PreloaderComponent, DropdownModule,FormsModule,CommonModule,FormsModule],
  templateUrl: './signaler-fraude.component.html',
  styleUrls: ['./signaler-fraude.component.css'],
  providers: [ServicesService]
})
export class SignalerFraudeComponent implements OnInit {
  categories: any[] = [];
  cities: any[] = [];
  selectedCategory: any;
  selectedCity: any;
  fileError: string | null = null;
  uploadedImages: string[] = [];
  maxImages: boolean = false;

  constructor(private servicesService: ServicesService) {}

  ngOnInit() {
    this.servicesService.getCategories().subscribe(data => {
      this.categories = data.data.map((category: any) => ({
        label: category.name,
        value: category.id
      }));
      console.log(this.categories);
    });

    this.servicesService.getCities().subscribe(data => {
      this.cities = data.data.map((city: any) => ({
        label: city.name,
        value: city.id
      }));
    });
  }

  showTab(tabId: string): void {
    document.querySelectorAll('.tab').forEach(tab => {
      tab.classList.remove('active-tab');
    });
    const tabElement = document.querySelector(`#${tabId}`);
    if (tabElement) {
      tabElement.classList.add('active-tab');
    }
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('active-btn');
    });
    const tabButton = document.querySelector(`[data-tab="#${tabId}"]`);
    if (tabButton) {
      tabButton.classList.add('active-btn');
    }
  }

  onFileSelected(event: any): void {
    const files = event.target.files;
    if (files.length + this.uploadedImages.length > 3) {
      this.fileError = 'Vous ne pouvez télécharger que jusqu\'à 3 images.';
      this.maxImages = true;
    } else {
      this.fileError = null;
      this.maxImages = false;
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.uploadedImages.push(e.target.result);
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }

  deleteImage(index: number): void {
    this.uploadedImages.splice(index, 1);
    this.maxImages = this.uploadedImages.length >= 3;
  }

  replaceImage(index: number): void {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = (event: any) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.uploadedImages[index] = e.target.result;
      };
      reader.readAsDataURL(file);
    };
    fileInput.click();
  }
}
