import { Component, signal } from '@angular/core';
import { PatientsService } from '../patients-service';

@Component({
  selector: 'app-patients',
  imports: [],
  templateUrl: './patients.html',
  styleUrl: './patients.css',
})
export class Patients {
  constructor(private patientsService : PatientsService) { };
  
  patients = signal<any | null>(null);

  listerPatients() {
    this.patientsService.getPatients().subscribe({
      next: (res: {patients? : []}) => {console.log(res), this.patients.set(res["patients"])},
      error: err => console.error(err)
    });
  }

}
