import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../user-service';



@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor(private router: Router,protected userService: UserService) {} // injection du service UserService

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}