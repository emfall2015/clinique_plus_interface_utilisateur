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
<<<<<<< HEAD
   commentaire: string = '';

   ouvrirAppli(){
        window.open('http://localhost:8501/','_blank')
    }
=======
  constructor(private nuitService : NuitService) { };

  medecins = signal<any | null>(null);
  commentaire: string = '';

  listerMedecins() {
    this.nuitService.getMedecins().subscribe({
      next: (res: {medecins? : []}) => {
        this.medecins.set(res["medecins"]);
      },
      error: err => console.error(err)
    });
  }

>>>>>>> 9ee36a9f14056c78475cd2234db6e1be94dc5fdb
}
