import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { Accueil } from './accueil/accueil';
import { Test } from './test/test';
import { Layout } from './layout/layout';

export const routes: Routes = [
    { path: '', component: Accueil },
    { path: 'dashboard', component: Dashboard },
    { path: 'login', component: Login },
    { path: 'layout',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard
      },
      {
        path: 'test',
        component: Test
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]}
];
