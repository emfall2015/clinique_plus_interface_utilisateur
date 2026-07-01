import { Component, signal } from '@angular/core';
import { NuitService } from '../nuit-service';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-resultats-nuits',
  imports: [FormsModule,RouterOutlet,RouterLink],
  templateUrl: './resultats_nuits.html',
  styleUrl: './resultats_nuits.scss',
})
export class ResultatsNuits {

  constructor(private nuitService : NuitService) { };
   commentaire: string = '';

   ouvrirAppli(){
        window.open('http://localhost:8501/','_blank')
    }

  

  medecins = signal<any | null>(null);
  

  listerMedecins() {
    this.nuitService.getMedecins().subscribe({
      next: (res: {medecins? : []}) => {
        this.medecins.set(res["medecins"]);
      },
      error: err => console.error(err)
    });
  }
  
  NuitsNontraitees= signal<any | null>(null);

  listerNuitsNonTraitees() {
    this.nuitService.getNuitsNonTraitees().subscribe({
      next: (res: {NuitsNontraitees? : []}) => {
        this.NuitsNontraitees.set(res["NuitsNontraitees"]);;
      },
      error: err => console.error(err)
    });
  }

}


