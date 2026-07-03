import { Component, signal, OnInit } from '@angular/core';
import { NuitService } from '../nuit-service';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-resultats-nuits',
  imports: [FormsModule,RouterOutlet,RouterLink,NgClass,NgIf],
  templateUrl: './resultats_nuits.html',
  styleUrl: './resultats_nuits.scss',
})
export class ResultatsNuits implements OnInit {
    result = signal<any>(null); // Signal qui accepte tout

  constructor(private nuitService : NuitService, private http: HttpClient) { };
   commentaire: string = '';
   inputIdNuit : number =0;
   inputIdMedecin : number =0;
   isLoading = false;
   ouvrirAppli(){
        window.open('http://localhost:8501/','_blank')
    }

  ngOnInit(): void {
    this.listerNuitsNonTraitees();
    this.listerMedecins();
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
    this.isLoading = true;
    return this.http.post('http://localhost:3000/lancer-etl-operateur',
      {
        "id_nuit": id_nuit,
        "id_medecin": id_medecin,
        "commentaire_medical" : commentaire_medical
      }).subscribe({  //subscribe callback, envoie de la requete
        
        next: result => {  //en cas de reussite 
          this.result.set(result)
          this.isLoading = false;
          this.listerNuitsNonTraitees()
        },
        error: err => {
          console.error(err);
          this.isLoading = false;
          this.result.set({
            "success": false,
            "message": "Erreur lors de l'exécution du script Python"
          });
        }
      });
    }
    
  }

  
  