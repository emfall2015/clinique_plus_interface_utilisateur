import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { Accueil } from './accueil/accueil';
import { Patients } from './patients/patients';

export const routes: Routes = [
    { path: '', component: Accueil },
    { path: 'dashboard', component: Dashboard },
    { path: 'login', component: Login }
    { path: 'patients', component: Patients }
]