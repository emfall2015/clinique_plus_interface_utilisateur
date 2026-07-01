import { Component, signal } from '@angular/core';
import { NuitService } from '../nuit-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resultats-nuits',
  imports: [FormsModule],
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


}
