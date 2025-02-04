import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloaderComponent } from "../preloader/preloader.component";
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { FormsModule } from '@angular/forms';
import { ServicesService } from '../services.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [CommonModule, PreloaderComponent, FooterComponent, HeaderComponent, FormsModule, HttpClientModule],
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
  providers: [ServicesService]
})
export class InscriptionComponent {
  passwordVisible: { [key: string]: boolean } = {};

  villes: string[] = ['Paris', 'Lyon', 'Marseille'];
  codePostaux: { [key: string]: string[] } = {
    'Paris': ['75001', '75002', '75003'],
    'Lyon': ['69001', '69002', '69003'],
    'Marseille': ['13001', '13002', '13003']
  };
  selectedVille: string = '';
  selectedCodePostal: string = '';
  password: string = '';
  confirmPassword: string = '';
  errors: { [key: string]: string } = {};

  firstName: string = '';
  lastName: string = '';
  username: string = '';
  email: string = '';
  phoneNumber: string = '';
  address: string = '';

  constructor(private servicesService: ServicesService) { }

  togglePasswordVisibility(id: string): void {
    this.passwordVisible[id] = !this.passwordVisible[id];
    const input = document.getElementById(id) as HTMLInputElement;
    if (input.type === 'password') {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
  }

  onVilleChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedVille = target.value;
    this.selectedCodePostal = '';
    this.validateForm();
  }

  onCodePostalChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedCodePostal = target.value;
    this.validateForm();
  }

  onPasswordChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.password = target.value;
    this.validateForm();
  }

  onConfirmPasswordChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.confirmPassword = target.value;
    this.validateForm();
  }

  isPasswordVisible(id: string): boolean {
    return this.passwordVisible[id];
  }

  validateForm(): void {
    this.errors = {};
    if (!this.firstName) {
      this.errors['firstName'] = 'Prénom est obligatoire';
    }
    if (!this.lastName) {
      this.errors['lastName'] = 'Nom de famille est obligatoire';
    }
    if (!this.username) {
      this.errors['username'] = 'Nom d\'utilisateur est obligatoire';
    }
    if (!this.email) {
      this.errors['email'] = 'Email est obligatoire';
    }
    if (!this.phoneNumber) {
      this.errors['phoneNumber'] = 'Numéro de téléphone est obligatoire';
    }
    if (!this.address) {
      this.errors['address'] = 'Adresse est obligatoire';
    }
    if (!this.selectedVille) {
      this.errors['ville'] = 'Ville est obligatoire';
    }
    if (!this.selectedCodePostal) {
      this.errors['codePostal'] = 'Code postal est obligatoire';
    }
    if (!this.password) {
      this.errors['password'] = 'Mot de passe est obligatoire';
    }
    if (!this.confirmPassword) {
      this.errors['confirmPassword'] = 'Confirmer le mot de passe est obligatoire';
    }
    if (this.password && this.confirmPassword && this.password !== this.confirmPassword) {
      this.errors['passwordMismatch'] = 'Les mots de passe ne correspondent pas';
    }
  }

  register(): void {
    this.validateForm();
    if (Object.keys(this.errors).length === 0) {
      const user = {
        username: this.username,
        email: this.email,
        password: this.password,
        first_name: this.firstName,
        last_name: this.lastName,
        role_id: 3,
        city: this.selectedVille,
        postal_code: this.selectedCodePostal,
        address: this.address,
        phone_number: this.phoneNumber
      };
      this.servicesService.registerUser(user).subscribe(
        response => {
          console.log('User registered successfully', response);
          // Handle successful registration (e.g., navigate to login page)
          this.username = '';
          this.email = '';
          this.password = '';
          this.firstName = '';
          this.lastName = '';
          this.selectedVille = '';
          this.selectedCodePostal = '';
          this.address = '';
          this.phoneNumber = '';
          
          window.location.href = '/connexion';
          
        },
        error => {
          console.error('Error registering user', error);
          // Handle registration error (e.g., display error message)
        }
      );
    }
  }
}
