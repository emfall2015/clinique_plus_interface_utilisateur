import { Component } from '@angular/core';
import { UserService } from '../user-service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
    constructor(protected userService: UserService) { } // injection du service UserService

}
