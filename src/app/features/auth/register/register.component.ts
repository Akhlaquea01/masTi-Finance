import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'masTi-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.firstName && this.lastName && this.email && this.password) {
      // Mock registration - in a real app, this would call a registration service
      console.log('Registration submitted:', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email
      });
      
      // Redirect to login page
      this.router.navigate(['/auth/login']);
    }
  }
} 