import { Component, signal } from '@angular/core';
import { NuitService } from '../nuit-service';

@Component({
  selector: 'app-resultats-nuits',
  imports: [],
  templateUrl: './resultats_nuits.html',
  styleUrl: './resultats_nuits.css',
})
export class ResultatsNuits {
  constructor(private nuitService : NuitService) { };

  medecins = signal<any | null>(null);

  listerMedecins() {
    this.nuitService.getMedecins().subscribe({
      next: (res: {medecins? : []}) => {
        this.medecins.set(res["medecins"]);
      },
      error: err => console.error(err)
    });
  }


}
