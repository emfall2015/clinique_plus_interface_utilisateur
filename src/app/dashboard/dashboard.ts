import { Component } from '@angular/core';
import { UserService } from '../user-service';
import { Patients } from '../patients/patients';

@Component({
  selector: 'app-dashboard',
  imports: [Patients],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
    constructor(protected userService: UserService) { } // injection du service UserService

}
