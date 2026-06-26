import { Component } from '@angular/core';
import { UserService } from '../user-service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
    constructor(protected userService: UserService) { } // injection du service UserService

}
