import { Component } from '@angular/core';
import { PatientsService } from '../patients-service';

@Component({
  selector: 'app-patients',
  imports: [],
  templateUrl: './patients.html',
  styleUrl: './patients.css',
})
export class Patients {
  constructor(private patientsService : PatientsService) { };
  
  listerPatients() {
    this.patientsService.getPatients().subscribe({
      next: res => console.log(res),
      error: err => console.error(err)
    });
  }

}
