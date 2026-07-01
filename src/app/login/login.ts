import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  mdp = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    this.authService.login(this.email, this.mdp).subscribe({
      next: (res) => {
        console.log('LOGIN OK', res);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('LOGIN FAIL', err);
      }
    });
  }
}