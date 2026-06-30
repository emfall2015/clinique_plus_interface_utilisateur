import { HttpClient } from '@angular/common/http';
import { Service } from '@angular/core';

@Service()
export class NuitService {
    constructor(private http: HttpClient){};

    getMedecins(){
    return this.http.get('http://localhost:3000/medecins_validateurs');
    }
}
