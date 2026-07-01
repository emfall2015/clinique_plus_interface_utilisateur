<<<<<<< HEAD
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
=======
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user-service';
>>>>>>> 72d40bca180b9c65f4b3603167c9e769f3fa17a7
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
<<<<<<< HEAD
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
=======
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(protected userService: UserService, private router: Router) { } // injection de service UserService
  email: string = '';
  password: string = '';

  login() {
   return  this.userService.login(this.email,this.password);
  }

}
>>>>>>> 72d40bca180b9c65f4b3603167c9e769f3fa17a7
