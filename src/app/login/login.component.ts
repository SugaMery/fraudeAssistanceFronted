import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { PreloaderComponent } from "../preloader/preloader.component";
import { ServicesService } from '../services.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, PreloaderComponent , FormsModule, HttpClientModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ServicesService]

})
export class LoginComponent {
  formEmail: string = '';
  formPassword: string = '';
  formPasswordVisible: boolean = false;

  constructor(private servicesService: ServicesService, private router: Router, private http: HttpClient) {}

  login(email: string, password: string) {
    this.http.get<{ ip: string }>('https://api.ipify.org?format=json').subscribe(ipResponse => {
      const ip_address = ipResponse.ip;
console.log('IP Address', ip_address);
      this.servicesService.loginUsers({ email, password , ip_address }).subscribe(response => {
        if (response.status === 'success') {
          localStorage.setItem('token', response.data.token);
          console.log('Login successful', response);
          window.location.href = '/';
        } else {
          console.error('Login failed', response.message);
        }
      }, error => {
        console.error('Login failed', error);
        // Handle login error
      });
    });
  }

  // Method to handle password change
  onPasswordChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.formPassword = input.value;
  }
  ngOnInit() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'assets/css/responsive.css';
    document.head.appendChild(link);
  }
  // Method to toggle password visibility
  togglePasswordVisibility() {
    this.formPasswordVisible = !this.formPasswordVisible;
  }
}
