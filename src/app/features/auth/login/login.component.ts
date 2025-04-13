import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'masTi-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email && this.password) {
      // Mock login - in a real app, this would call an authentication service
      console.log('Login attempt with:', { email: this.email });
      
      // Simulate successful login
      localStorage.setItem('currentUser', JSON.stringify({
        id: '1',
        email: this.email,
        firstName: 'Demo',
        lastName: 'User',
        role: 'user'
      }));
      
      // Navigate to dashboard
      this.router.navigate(['/dashboard']);
    }
  }
} 