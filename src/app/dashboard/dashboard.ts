import { Component } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
=======
import { UserService } from '../user-service';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet,RouterLink],
>>>>>>> 72d40bca180b9c65f4b3603167c9e769f3fa17a7
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
<<<<<<< HEAD
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
=======
    constructor(protected userService: UserService) { } // injection du service UserService

}
>>>>>>> 72d40bca180b9c65f4b3603167c9e769f3fa17a7
