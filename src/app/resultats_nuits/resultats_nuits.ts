import { Component, signal } from '@angular/core';
import { NuitService } from '../nuit-service';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resultats-nuits',
  imports: [FormsModule,RouterOutlet,RouterLink],
  templateUrl: './resultats_nuits.html',
  styleUrl: './resultats_nuits.scss',
})
export class ResultatsNuits {
    result = signal<any>(null); // Signal qui accepte tout

  constructor(private nuitService : NuitService, private http: HttpClient) { };
   commentaire: string = '';
   inputIdNuit : number =0;
   inputIdMedecin : number =0;
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
      next: (res: {nuit_etude? : []}) => {
        this.NuitsNontraitees.set(res["nuit_etude"]);
       console.log(res["nuit_etude"]);
      },
      error: err => console.error(err)
    });
  }

  lancerEtl(id_nuit: number, id_medecin: number,commentaire_medical:string) {
    console.log("id_nuit",id_nuit);
    console.log("id_medecin",id_medecin);
    console.log("commentaire_medical",commentaire_medical);
    return this.http.post('http://localhost:3000/lancer-etl-operateur',
      {
        "id_nuit": id_nuit,
        "id_medecin": id_medecin,
        "commentaire_medical" : commentaire_medical
      }).subscribe({  //subscribe callback, envoie de la requete

        next: result => {  //en cas de reussite 
          this.result.set(result)
        },
        error: err => {
          console.error(err);
          this.result.set(null);
        }
      });
  }
  
}


