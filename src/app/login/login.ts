import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
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
